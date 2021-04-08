import React from 'react';
import Route from 'react-router-dom/Route'
import './search.css';
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
        <br></br>
        <br></br>
        <Title text="¡Bienvenido!"></Title>
        <Label text= "¿A DÓNDE TE DIRIGES"></Label>
        <Label text= " EL DÍA DE HOY?"></Label>"
        <Input
              attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Buscar...'
              }}
            />
            <br></br>
        <br></br>
            <Label text= "Búsquedas Recientes..."></Label>"
            <div className="busqRec">
              <div className="">
              <label >Hola</label>
              </div>
              <div>
              <labe>Hola</labe>
              </div>
              <div>
              <labe>Hola</labe>
              </div>
              <div>
              <labe>Hola</labe>
              </div>
            </div>
        <Navbar/>
      </div>
      
    );
  }
}

export default search;