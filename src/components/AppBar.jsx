import React from "react";
import PropTypes from 'prop-types';
import SearchNote from "./SearchNote";

function AppBar({name, searchTerm, setSearchTerm}) {
    return (
        <div id="appBar" className="app-bar">
            <h1>{name}</h1>
            <SearchNote searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    ) 
}

AppBar.propTypes = {
    name: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};

export default AppBar;
