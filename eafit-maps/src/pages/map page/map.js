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
      x: '', y: '', z: '', z: ''
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
        const { x, y, z, id } = res.data[0];
        this.setState({
          x, y, z, id
        });
      })
      .catch((err) => console.log(err))
  }

  onDoubleClickOnCard = event => {
    event.preventDefault()
    event.stopPropagation()

    const zoneRect = event.currentTarget.getBoundingClientRect()
    const layoutRect = event.currentTarget.parentNode.getBoundingClientRect()

    const zoom = this.prismaZoom.current.getZoom()

    if (zoom > 1) {
      this.prismaZoom.current.reset()
      return
    }

    const [relX, relY] = [
      (zoneRect.left - layoutRect.left) / zoom,
      (zoneRect.top - layoutRect.top) / zoom
    ]
    const [relWidth, relHeight] = [
      zoneRect.width / zoom,
      zoneRect.height / zoom
    ]
    
    this.prismaZoom.current.zoomToZone(relX, relY, relWidth, relHeight)
  }

  /* const id = this.props.match.params.id;
  let Prisma = document.getElementById('Prisma')
  Prisma.zoomToZone (id, id, id, id)
   */
  render() {

    const { x, y, z, id } = this.state
    const styles = {
      /* transform: `scale(${id})` */
      transform: 'translate3d(0px, 0px, 0px) scale(${id})'
    };

    return (
      <div className="content">

        <div className="map">
          
          <PrismaZoom id="prisma" ref={this.prismaZoom}>

            <img src={mapImage} onDoubleClick={this.onDoubleClickOnCard}/>

          </PrismaZoom>

        </div>

        <Navbar />
      </div>

    );
  }
}

export default map;