// eslint-disable-next-line no-unused-vars
import React from "react";
//import RealtimeDate from "./RealtimeDate";
import DeleteButton from "./DeleteButton";
import JudulSection from "./JudulSection";
import { showFormattedDate } from "../utils/data";

// eslint-disable-next-line react/prop-types
export default function NoteItem({title, body, id, onDelete, createdAt}){
    return(
            <div className="note-item">
                <JudulSection nama={title}/>
                <DeleteButton id={id} onDelete={onDelete}/>
                <small><i>{showFormattedDate(createdAt)}</i></small>
                <p>{body}</p>
            </div>
    )
}