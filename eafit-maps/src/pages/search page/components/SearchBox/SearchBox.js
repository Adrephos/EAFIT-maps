import React, { Component } from 'react';
import './searchbox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


const listaBloques = [
    { numero: 7, descripcion: "Carnetización" },
    { numero: 29, descripcion: "Admisiones" },
    { numero: 32, descripcion: "Biblioteca" }
]

var inputSearch = document.getElementById("inputSearch");
var box_search = document.getElementById("box-search");
class SearchBox extends Component {
    state = {
        busqueda: '',
        Bloques: []
    }

    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        console.log(this.state.busqueda);
        this.filtrarElementos();
        document.getElementById("inputSearch").addEventListener("keyup", this.buscador_interno)
    }

    filtrarElementos = () => {
        var search = listaBloques.filter(item => {
            if (item.numero.toString().includes(this.state.busqueda)) {
                return item;
            }
        });
        this.setState({ Bloques: search })
    }
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

                if (document.getElementById("inputSearch").value === "") {
                    document.getElementById("box-search").style.display = "none";
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
                    <li className="element top">
                        <a>Bloque 7: Carnetización</a>
                    </li>
                    <li className="element">
                        <a>Bloque 29: Admisiones</a>
                    </li>
                    <li className="element">
                        <a>Bloque 32: Biblioteca</a>
                    </li>
                    <li className="element bottom">
                        <a>Bloque 38: Humanidades</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SearchBox;