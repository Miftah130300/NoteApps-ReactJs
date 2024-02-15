import React from "react";
import PropTypes from 'prop-types';

function AppBar({name, logout}) {
    return (
        <div id="appBar" className="app-bar">
            <h1>{name}</h1>
            <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
    ) 
}

AppBar.propTypes = {
    name: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};

export default AppBar;
