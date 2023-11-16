// eslint-disable-next-line no-unused-vars
import React from "react";
import NoteItem from "./NoteItem";
import JudulSection from "./JudulSection";

export default function NoteList({notes, onDelete}){
  const activeNotes = notes.filter((note) => note.archived === false) 
  return(
      <div className="note-list-container">
        <JudulSection nama={'Note Lists'} />
        <div className="note-list">
            {
              activeNotes
              .length !== 0? (notes.map((note)=>(
                    <NoteItem key={note.id}id={note.id}onDelete={onDelete}{...note}/>
                )))
                : (
                <div className="alert">
                  <h4><i>No Records</i></h4>
                </div>
                  )
            }
        </div>
      </div>
    )
}