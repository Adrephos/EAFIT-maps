import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { withRouter } from "react-router";
import './search.css';
import SearchBox from '../components/SearchBox/SearchBox';
import Navbar from "../components/Navbar/Navbar"
import Label from "../components/label/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


const listaBloques = [
  { id: 1, numero: 7, descripcion: "Carnetización", x: 7, y: 7, z: 7 },
  { id: 2, numero: 29, descripcion: "Admisiones", x: 7, y: 7, z: 7 },
  { id: 3, numero: 32, descripcion: "Biblioteca", x: 7, y: 7, z: 7 },
  { id: 4, numero: 38, descripcion: "Humanidades", x: 7, y: 7, z: 7 },
  { id: 3, numero: 32, descripcion: "Biblioteca", x: 7, y: 7, z: 7 },
  { id: 3, numero: 32, descripcion: "Biblioteca", x: 7, y: 7, z: 7 },
  { id: 3, numero: 32, descripcion: "Biblioteca", x: 7, y: 7, z: 7 },
]

const listItems = listaBloques.map((bloques, index) =>
  <li key={bloques.id} id={bloques.id} className="element" >
    <Link to="/map" className="a">Bloque {bloques.numero}: {bloques.descripcion}</Link>
  </li>
);

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
  render() {
    
    return (
      <div className="content">
        <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
        <div className="welcome">
          <h1>¡BIENVENIDO!</h1>
          <h3>¿A DÓNDE TE DIRIJES HOY?</h3>
        </div>
        <SearchBox id="inputSearch" />
        <br></br>
        <br></br>
        <div id="busqRec">
          <Label text="Búsquedas Recientes..."></Label>
          <ul id="box">
            {listItems.slice(0, 4)}
            <li className="more">
              <a>Más...</a>
            </li>
          </ul>

        </div>


        <Navbar />
      </div>

    );
  }
}

export default search;