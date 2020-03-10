import React from 'react'
import './styles.css'
import { News } from '../News'
import { MdBookmark } from 'react-icons/md'
import { Link } from '@reach/router'
import { fetchNoticias, setNoticiasMarcadas } from '../../redux/actions/noticias'
import { connect } from 'react-redux'

class ListOfNews extends React.Component {
  componentDidMount() {
    this.props.fetchNoticias();
  }

  setAsMarked = (id) => {
    this.props.setNoticiasMarcadas(id)
  }

  render () {
      if (this.props.loading) {
        return <div>Loading...</div>
    }
    if (this.props.error) {
        return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }
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
    dataNoticias: state.noticias,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = {
   fetchNoticias,
   setNoticiasMarcadas
};

export default connect(mapStateToProps,mapDispatchToProps)(ListOfNews)
