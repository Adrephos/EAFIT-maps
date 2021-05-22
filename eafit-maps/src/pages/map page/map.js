import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import mapImage from './map/Mapa EAFIT.jpg';
import './map.css';
import Navbar from "../components/Navbar/Navbar"
import GridLayout from 'react-grid-layout';
import Draggable, { DraggableCore } from 'react-draggable';
import PrismaZoom from 'react-prismazoom'

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
      <div className="content">

        <div className="map">
          {/* <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
              <div className="handle">
                  <img src={mapImage} alt=""/>
              </div>
            </Draggable> */}
          <PrismaZoom>
            <img src={mapImage} />
          </PrismaZoom>
        </div>

        <Navbar />
      </div>

    );
  }
}

export default map;