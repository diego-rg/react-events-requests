import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//Refactor a compoñente de clase para pasar o query do compoñente SearchBar a App (de fillo a pai)
class App extends React.Component {
  onSearchSubmit(query) {
    console.log(query);
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
