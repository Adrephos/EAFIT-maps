import React from 'react';
import './searchbox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div type='search' className='search'>
            <input type='search'
                placeholder={placeholder}
                onChange={this.onChange}
                value={this.state}
            />
            <button type="button" className="btnBuscar">
                {" "}
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}

export default SearchBox;