import React, { useState } from "react";
import JudulSection from "./JudulSection";
import PropTypes from 'prop-types';

function NoteInput({ addNote }) {
    const [note, setNote] = useState({
        title: '',
        body: ''
    });

    const { title, body } = note;

    const onTitleChange = (event) => {
        setNote({
            ...note,
            title: event.target.value
        });
    };

    const onBodyChange = (event) => {
        setNote({
            ...note,
            body: event.target.value
        });
    };

    const onInputNoteHandler = (event) => {
        event.preventDefault();
        addNote({
            title,
            body
        });
        setNote({
            title: '',
            body: ''
        });
    };

    return (
        <section className="kotakForm">
            <JudulSection nama={'New Note'}/>
            <form className="InputNote" onSubmit={onInputNoteHandler}>
                <input id="title" type="text" placeholder="title" value={title} onChange={onTitleChange}/>
                <textarea id="description" name="deskripsi" placeholder="add your note.." rows="4" cols="50" value={body} onChange={onBodyChange}></textarea>
                <button className="save-button" type="submit">Submit</button>
            </form>
        </section>
    );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NoteInput;