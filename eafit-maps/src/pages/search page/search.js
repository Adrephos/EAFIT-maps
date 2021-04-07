import React from 'react';
import Route from 'react-router-dom/Route'
import './search.css';
import Input from "./components/input/Input";
import Title from './components/title/title'
import Navbar from "./components/Navbar/Navbar"
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
        
        <Input
              attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Buscar'
              }}
            />
        <label text="contraseña">Contraseña:</label>
        <title text="titulo">Titulo</title>
        <Navbar/>
      </div>
    );
  }
}

export default search;