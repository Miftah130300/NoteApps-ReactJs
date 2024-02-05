// eslint-disable-next-line no-unused-vars
import React from "react";
//import RealtimeDate from "./RealtimeDate";
import DeleteButton from "./DeleteButton";
import JudulSection from "./JudulSection";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NoteItem({title, body, id, onDelete, createdAt}){
    return(
            <div className="note-item">
                <div className="judul-item">
                    <Link to={`/notes/${id}`}><JudulSection nama={title}/></Link>
                    <DeleteButton id={id} onDelete={onDelete}/>
                </div>
                <small><i>{showFormattedDate(createdAt)}</i></small>
                <p>{body}</p>
            </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    createdAt: PropTypes.string.isRequired,
};