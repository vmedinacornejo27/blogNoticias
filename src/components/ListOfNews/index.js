import React from "react";
import "./styles.css";
import { News } from "../News";
import { MdBookmark } from "react-icons/md";
import { Link } from "@reach/router";
import axios from "axios";

class ListOfNews extends React.Component {
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

  render() {
    return (
      <div className="container">
        <Link to="/detailViewSave">
          <div className="verMasTarde">
            <MdBookmark size="40px" color="#f32617" />
            <p className="GuardadoEtiqueta"> Ver Más Tarde </p>
          </div>
        </Link>
        <div className="AppCont">
          {this.state.data.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <ul className="row">
              {this.state.data.map(not => (
                <li key={not.id}>
                  <News {...not} id={not.id} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
export default ListOfNews;
