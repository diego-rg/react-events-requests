import React from "react";

//Como necesitamos usar state, usamos compoñente de clase (máis adiante hooks, redux)
//Creamos evento onchange no input
class SearchBar extends React.Component {
  state = { query: "Hola! No soy un placeholder!" };
  //Usando estado e setState temos creamos un componente controlado: os datos do input tamén os ten React no state, non só o html coma no caso anterior

  //Para evitar que recargue a páxina ao enviar a forma o server
  //Erro común en React: Cannot read property State of undefined. Relacionado con this:
  //this refírese ao propio componente, neste caso a clase SearchBar, dándonos acceso a state, render, etc con this.state/this.render
  //Resolver con bind this en constructor de clase ou usar arrow function e babel, usar unha onformsubmit directamente no render coma onChange
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmitQuery(this.state.query);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form
          className="ui form search-bar__form"
          action=""
          onSubmit={this.onFormSubmit}
        >
          <div className="field search-bar__field">
            <label className="search-bar__label" htmlFor="searchInput">
              Buscar:
            </label>
            <input
              className="search-bar__input"
              id="searchInput"
              type="text"
              value={this.state.query}
              onChange={(e) =>
                this.setState({ query: e.target.value.toLocaleLowerCase() })
              } //Usando this.onInputChange() executaríase ao renderizar. O que queremos é que o faga cando o user fai input
              //Sintaxis alternativa con arrow: onChange={(event) => console.log(event.target.value)}.
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
