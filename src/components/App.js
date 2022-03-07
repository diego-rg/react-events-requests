import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//Refactor a compoñente de clase para pasar o query do compoñente SearchBar a App (de fillo a pai)
class App extends React.Component {
  onSearchSubmit(query) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: query },
      headers: {
        Authorization: "Client-ID jPKt0eNaMazgp0Td0TGdlkmDmKIFveXjQAHwUAqIAqs"
      }
    })
  }

  render() {
    return (
      <div className="ui container app-container">
        <SearchBar onSubmitQuery={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
