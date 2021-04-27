import React from 'react';
import Route from 'react-router-dom/Route'
import './search.css';
import SearchBox from './components/SearchBox/SearchBox';
import Input from "./components/input/Input";
import Title from './components/title/title'
import Navbar from "./components/Navbar/Navbar"
import Label from "./components/label/label"
class search extends React.Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }
  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
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
      <div className="App">
        <div className="welcome">
          <h1>¡BIENVENIDO!</h1>
          <h3>¿A DÓNDE TE DIRIJES HOY?</h3>
        </div>
        <SearchBox id="inputSearch" placeholder="Buscar..." handleChange={this.handleChange}/>
        <br></br>
        <br></br>
            <Label text= "Búsquedas Recientes..."></Label>"
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
        <Navbar/>
      </div>
      
    );
  }
}

export default search;