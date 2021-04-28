import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import './search.css';
import SearchBox from './components/SearchBox/SearchBox';
import Navbar from "./components/Navbar/Navbar"
import Label from "./components/label/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
class search extends Component {

  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }
  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  state={
    busqueda: ''
  }
    
  onChange=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    console.log(this.state.busqueda);
  }

  render() {
    return (
      <div className="App">
        <div className="welcome">
          <h1>¡BIENVENIDO!</h1>
          <h3>¿A DÓNDE TE DIRIJES HOY?</h3>
        </div>
          <SearchBox id="inputSearch" placeholder="Buscar..." handleChange={this.handleChange} />
        <br></br>
        <br></br>
        <Label text="Búsquedas Recientes..."></Label>"
        <div className="busqRec">
          <div className="element">
            <label >Hola</label>
          </div>
          <div className="element">
            <labe>Hola</labe>
          </div>
          <div className="element">
            <labe>Hola</labe>
          </div>
          <div className="element">
            <labe>Hola</labe>
          </div>
        </div>

        <Navbar />
      </div>

    );
  }
}

export default search;