import React, { useState } from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import AppBar from "./AppBar";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import Login from "./login/loginpage";
import Register from "./login/registerpage";
import { Routes, Route, Link, Await } from "react-router-dom";
import DetailPage from "./DetailPage";
import { getAccessToken, putAccessToken, getUserLogged } from "../utils/api";

function NoteApps() {
    const initialNotes = getInitialData();
    const [notes, setNotes] = useState(initialNotes);
    const [searchTerm, setSearchTerm] = useState("");
    const [token, setToken] = useState(getAccessToken())

    async function onLoginHandler({ accessToken }){
        putAccessToken(accessToken)
        const {data, error} = await getUserLogged()

        if(!error){
            setToken(data)
        } else {
            alert('wait a minute')
        }
    }
    
    const onLogOutHandler = () => {
        setToken(null)
        putAccessToken('')
    }

    const onDeleteHandler = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    const onAddNoteHandler = ({ title, body }) => {
        const newNote = {
            id: String(+new Date()),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(+new Date())
        };
        setNotes([...notes, newNote]);
    };

    const onSearchHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    const displayNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if(!token){
        return(
            <div className='note-app'>
                <Routes>
                    <Route path="/*" element={<Login setTheToken={onLoginHandler}/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </div>
        )
    }
    return (
        <>
            <header>
                <nav className="main-navigasi">
                    <AppBar name='My Note' searchTerm={searchTerm} setSearchTerm={onSearchHandler} logout={onLogOutHandler}/>
                </nav>
            </header>
            <main>
                <Link to={'/notes/new'}><div className="add-button">Add your note!</div></Link>
                <Routes>
                    <Route path="/" element={<NoteList notes={displayNotes} onDelete={onDeleteHandler} />} />
                    <Route path="/notes/new" element={<NoteInput addNote={onAddNoteHandler} />} />
                    <Route path="/notes/:id" element={<DetailPage notes={displayNotes} />} />
                </Routes>
            </main>
        </>
    );
}

export default NoteApps;