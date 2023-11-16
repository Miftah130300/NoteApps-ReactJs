// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchNote from "./SearchNote";

// eslint-disable-next-line react/prop-types
export default function AppBar({name, searchTerm, setSearchTerm}){
    return(
          <div id="appBar" className="app-bar">
            <h1>{name}</h1>
            <SearchNote searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </div>
    ) 
}