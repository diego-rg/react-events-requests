import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//Refactor a compoñente de clase para pasar o query do compoñente SearchBar a App (de fillo a pai)
//A api de unsplash require rexistro e clave. Axios devolve unha promise
class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (query) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: query },
      headers: {
        Authorization: "Client-ID jPKt0eNaMazgp0Td0TGdlkmDmKIFveXjQAHwUAqIAqs"
      }
    })
    this.setState({ images: response.data.results })
  }
//alternativa con .then((res) => {console.log(res)}) para traballar coa promise en vez de async await

  render() {
    return (
      <div className="ui container app-container">
        <SearchBar onSubmitQuery={this.onSearchSubmit} />
        Resultados: { this.state.images.length } imágenes
      </div>
    );
  }
}

export default App;
