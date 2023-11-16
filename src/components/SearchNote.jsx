import React from "react";

export default function SearchNote ({searchTerm, setSearchTerm}){
    return(
        <div className="search-note-container">
            <input className="search-note-input" type="text" placeholder="search here.."  value={searchTerm} onChange={setSearchTerm}/>
        </div>
    )
}