// eslint-disable-next-line no-unused-vars
import React from "react"
import { getInitialData, showFormattedDate} from "../utils/data"
import AppBar from "./AppBar"
import NoteInput from "./NoteInput"
import NoteList from "./NoteList"


export default class NoteApps extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            notes: getInitialData(),
            searchTerm: ""
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState)=>{
            const notes = [
                    ...prevState.notes, {
                            id: +new Date(),
                            title,
                            body,
                            archived: false,
                            createdAt: showFormattedDate(+new Date())
                    }
                ]
            console.log(notes)
            return{ notes }
        })
    }

    onSearchHandler(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    
    render(){
        const { notes, searchTerm } = this.state;
        const displayNotes = notes.filter(note =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return(
            <>
            <header>
                <nav className="main-navigasi">
                <AppBar name='My Note' searchTerm={this.state.searchTerm} setSearchTerm={this.onSearchHandler}/>
                </nav>
            </header>
            <main>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <NoteList notes={displayNotes} onDelete={this.onDeleteHandler}/>
            </main>
            </>
        )
    }
}