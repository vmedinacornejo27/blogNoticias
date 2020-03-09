import React from 'react'
import './styles.css'
import { News } from '../News'
import { MdBookmark } from 'react-icons/md'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import axios from 'axios'

class ListOfNews extends React.Component {
/*
  state = {
    data: []
  };
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    let res = await axios.get(`http://10.60.65.28:3000/noticia/listaNoticias`);
    let { data } = res.data;
    this.setState({ data: data });
  };
*/
  state = {
    data: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    let res = await axios.get('http://localhost:3002/noticias/');
    let { data } = res;
    //this.setState({ data: data });
    this.props.dispatch({type: 'LOAD_DATA', noticias: data});
  };

  setAsMarked = (id) => {
    this.props.dispatch({type: 'SET_NOTICIA_AS_MARKED', id: id })
  }

  render () {
    return (
      <div className='container'>
        <Link to='/detailViewSave'>
          <div className='verMasTarde'>
            <MdBookmark size='40px' color='#f32617' />
            <p className='GuardadoEtiqueta'> Ver Más Tarde </p>
          </div>
        </Link>
        <div className='AppCont'>
          {this.props.dataNoticias.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <ul className='row'>
              {this.props.dataNoticias.map(not => (
                <li key={not.id}>
                  <News {...not} id={not.id} fueMarcado={not.fueMarcado} setAsMarked={this.setAsMarked}  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataNoticias: state.noticias
  }
}

export default connect(mapStateToProps)(ListOfNews)
