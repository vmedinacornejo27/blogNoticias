import React from "react";
import "./styles.css";
import { NewsSave } from "../NewsSave";

class ListOfNewsSave extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const KeylistadoVerMasTarde2 = "listadoVerMasTarde";
    let listadoverTarde = [];
    listadoverTarde =
      JSON.parse(window.localStorage.getItem(KeylistadoVerMasTarde2)) || [];
    this.setState({ data: listadoverTarde });
  }

  removeLocalStorage = valueId => {
    try {
      const KeylistadoVerMasTarde = "listadoVerMasTarde";
      let listadover = [];
      listadover = JSON.parse(
        window.localStorage.getItem(KeylistadoVerMasTarde)
      );
      const nuevolistadover = listadover.filter(notic => notic.id !== valueId);
      window.localStorage.setItem(
        KeylistadoVerMasTarde,
        JSON.stringify(nuevolistadover)
      );
      this.setState({ data: nuevolistadover });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className="containerListSave">
        <div className="AppContListSave">
          {this.state.data.length === 0 ? (
            <div>No hay noticias guardados...</div>
          ) : (
            <ul className="rowListSave">
              {this.state.data.map(not => (
                <li key={not.id}>
                  <NewsSave
                    {...not}
                    key={not.id}
                    id={not.id}
                    deleteN={this.removeLocalStorage}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default ListOfNewsSave;
