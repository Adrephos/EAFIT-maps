import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import mapImage from './map/Mapa EAFIT.jpg';
import './map.css';
import Navbar from "../components/Navbar/Navbar"
import GridLayout from 'react-grid-layout';
import Draggable, { DraggableCore } from 'react-draggable';
import PrismaZoom from 'react-prismazoom'
import { getPost } from '../utils/api';

class map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      relX: '', relY: '', relWidth: '', relHeight: ''
    };
    console.log(this.state.relX)
  }

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


    const { id } = this.props.match.params;
    getPost(id)
      .then((res) => {
        const { relX, relY, relWidth, relHeight } = res.data[0];
        this.setState({
          relX, relY, relWidth, relHeight
        });
      })
      .catch((err) => console.log(err))
  }


  /* const id = this.props.match.params.id;
  let Prisma = document.getElementById('Prisma')
  Prisma.zoomToZone (id, id, id, id)
   */
  render() {

    const { relX, relY, relWidth, relHeight } = this.state
    const styles = {
      /* transform: `scale(${id})` */
      transform: 'translate3d(0px, 0px, 0px) scale(${id})'
    };

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
            <br/>
            <br/>
            <br/>
            <p>{relX}</p>
          <PrismaZoom id="prisma" style={{ styles }} >
          
            <img src={mapImage} />

          </PrismaZoom>
          
        </div>
        
        <Navbar />
      </div>

    );
  }
}

export default map;