import React from "react";
import "./styles.css";
import axios from "axios";

function DetailNot(props) {
  const { news } = props;

  const fechaObj = new Date(news.fecha);
  const fechaFormat = fechaObj.toLocaleDateString("es", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <div className="containerDetail">
      <article className="ArticleDetail">
        <div>
          <h2 className="TituloDetail"> {news.titulo} </h2>
        </div>
        <div className="ContenidoDetailAutor">
          <img className="ImgDetail" src={news.foto} alt="nt" />
          <div className="ContenidoDetailAutorDatos">
            <p className="DetalleDetail"> {news.nombres} </p>

            <p className="DetalleDetail"> {fechaFormat} </p>
          </div>
        </div>
        <div className="ContenidoDetail">
          <p className="ContenidoLargoDetail"> {news.contenido} </p>
          <div className="ContenidoBotonEtiqueta">
            <button className="ButtonEstiloEtiqueta"> Liberty </button>
            <button className="ButtonEstiloEtiqueta"> Manual </button>
            <button className="ButtonEstiloEtiqueta"> Interpretation </button>
            <button className="ButtonEstiloEtiqueta"> Recomendation </button>
          </div>
        </div>
        <div className="ContenidoDetailAutor">
          <img className="ImgDetail" src={news.foto} alt="nt" />
          <div className="ContenidoDetailAutorDatos">
            <p className="DetalleDetail"> {news.nombres} </p>

            <p className="DetalleDetail"> {fechaFormat} </p>
          </div>
        </div>
      </article>
    </div>
  );
}

class DetailNew extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getNewsDetail(this.props.detailId);
  }

  getNewsDetail = async id => {
    let res = await axios.get(`http://10.60.65.283:3000/noticia/buscar/${id}`);
    let { data } = res.data;
    this.setState({ data: data });
  };

  render() {
    return this.state.data.length === 0 ? (
      <div>Loading...</div>
    ) : (
      <DetailNot news={this.state.data} />
    );
  }
}

export default DetailNew;
