import React from "react";
import PropTypes from 'prop-types';

function SearchNote ({searchTerm, setSearchTerm}) {
    return(
        <div className="search-note-container">
            <input className="search-note-input" type="text" placeholder="search here.."  value={searchTerm} onChange={setSearchTerm}/>
        </div>
    )
}

SearchNote.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};

export default SearchNote;
