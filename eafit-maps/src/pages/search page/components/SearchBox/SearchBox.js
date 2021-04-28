import React, { Component } from 'react';
import './searchbox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const listaBloques = [
    { numero: 7, descripcion: "Carnetización" },
    { numero: 29, descripcion: "Admisiones" },
    { numero: 32, descripcion: "Biblioteca" }
]
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
    }

    filtrarElementos=()=>{
        var search = listaBloques.filter(item=>{
            if (item.numero.toString().includes(this.state.busqueda)) {
                return item;
            }
        });
        this.setState({Bloques: search})
    }
    componentDidMount() {
        this.setState({ Bloques: listaBloques })
    }
    render() {
        return (
            <div type='search' className='search'>
                <input type='search'
                    placeholder="Buscar..."
                    onChange={this.onChange}
                    value={this.state.busqueda}
                />
                <button type="button" className="btnBuscar">
                    {" "}
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        )
    }
}

export default SearchBox;