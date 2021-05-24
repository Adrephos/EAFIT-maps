import React, { Component } from 'react';
import './searchbox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'

const listaBloques = [
    { id: 1, numero: 7, descripcion: "Carnetización", x: 7, y: 7, z: 7 },
    { id: 2, numero: 29, descripcion: "Admisiones", x: 7, y: 7, z: 7 },
    { id: 3, numero: 32, descripcion: "Biblioteca", x: 7, y: 7, z: 7 },
    { id: 4, numero: 38, descripcion: "Humanidades", x: 7, y: 7, z: 7 },
    /*{ id: 5 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 6 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 7 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 8 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 9 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 10 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 },
    { id: 11 ,numero: 38, descripcion: "Humanidades", x: 7, y: 7, z:7 }*/
]
const listItems = listaBloques.map((bloques) =>
    <li key={bloques.id} id={bloques.id} className="element">
        <Link to="/map" className="a">Bloque {bloques.numero}: {bloques.descripcion}</Link>
    </li>
);

class SearchBox extends Component {
    state = {
        busqueda: '',
        Bloques: []
    }

    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        //this.filtrarElementos();
        document.getElementById("inputSearch").addEventListener("keyup", this.buscador_interno)
    }

    /*filtrarElementos = () => {
        var search = listaBloques.filter(item => {
            if (item.numero.toString().includes(this.state.busqueda)) {
                return item;
            }
        });
        this.setState({ Bloques: search })
    }*/

    componentDidMount() {
        this.setState({ Bloques: listaBloques })
    }


    buscador_interno = () => {
        var filter = document.getElementById("inputSearch").value.toUpperCase();
        var li = document.getElementById("box-search").getElementsByTagName("li");

        for (let i = 0; i < li.length; i++) {
            var a = li[i].getElementsByTagName("a")[0];
            var textValue = a.textContent || a.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {

                li[i].style.display = "";
                document.getElementById("box-search").style.display = "block"
                document.getElementById("busqRec").style.display = "none"

                if (document.getElementById("inputSearch").value === "") {
                    document.getElementById("box-search").style.display = "none";
                    document.getElementById("busqRec").style.display = "block"
                }
            } else {
                li[i].style.display = "none";
            }
        }
    }


    render() {
        return (
            <div className='search'>
                <div type='search' >
                    <input type='search' id='inputSearch' className='bar'
                        placeholder="Buscar..."
                        onChange={this.onChange}
                        value={this.state.busqueda}
                    />
                    <button type="button" className="btnBuscar">
                        {" "}
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                </div>
                <ul id='box-search'>
                    {listItems}
                </ul>

            </div>
        )
    }
}

export default SearchBox;