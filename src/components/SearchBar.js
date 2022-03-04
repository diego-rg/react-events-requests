import React from "react";

//Como necesitamos usar state, usamos compoñente de clase (máis adiante hooks, redux)
//Creamos evento onchange no input
class SearchBar extends React.Component {
  onInputChange(event) {

  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form search-bar__form" action="">
          <div className="field search-bar__field">
            <label className="search-bar__field" htmlFor="">
              Buscar:
            </label>
            <input
              className="search-bar__input"
              type="text"
              onChange={this.onInputChange}//Usando this.onInputChange() executaríase ao renderizar. O que queremos é que o faga cando o user fai input
              //Sintaxis alternativa con arrow: onChange={(event) => console.log(event.target.value)}.
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
