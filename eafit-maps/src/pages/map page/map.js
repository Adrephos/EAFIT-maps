import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import mapImage from './map/Mapa EAFIT.jpg';
import './map.css';
import Navbar from "../components/Navbar/Navbar"
import GridLayout from 'react-grid-layout';
import Draggable, {DraggableCore} from 'react-draggable'; 

class map extends Component {

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
        <div className="App">

          <Draggable>
            <div className="handle">
                <img src={mapImage} alt=""/>
            </div>
          </Draggable>
          <Navbar />
        </div>
  
      );
    }
  }
  
  export default map;