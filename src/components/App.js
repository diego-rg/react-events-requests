import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//Refactor a compoñente de clase para pasar o query do compoñente SearchBar a App (de fillo a pai)
//A api de unsplash require rexistro e clave. Axios devolve unha promise
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (query) => {
    const response = await unsplash.get("/search/photos", {
        params: { query: query }
      }
    );
    this.setState({ images: response.data.results });
  };
  //alternativa con .then((res) => {console.log(res)}) para traballar coa promise en vez de async await

  render() {
    return (
      <div className="ui container app-container">
        <SearchBar onSubmitQuery={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
