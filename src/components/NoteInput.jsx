// eslint-disable-next-line no-unused-vars
import React from "react";
import JudulSection from "./JudulSection";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            title: '',
            body: '',
            createdAt: ''
        }

        this.onInputNoteHandler = this.onInputNoteHandler.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
    }
    onTitleChange(event){
        this.setState(()=>{
            return{
                title: event.target.value
            }
        })
    }
    onBodyChange(event){
        this.setState(()=>{
            return{
                body: event.target.value
            }
        })
    }
    onInputNoteHandler(event){
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render(){
        return(
        <section className="kotakForm">
            <JudulSection nama={'New Note'}/>
                <form className="InputNote" onSubmit={this.onInputNoteHandler}>
                    <input id="title" type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChange}/>
                    <textarea id="description" name="deskripsi" placeholder="add your note.." rows="4" cols="50" value={this.state.body} onChange={this.onBodyChange}></textarea>
                    <button className="save-button" type="submit">Submit</button>
                </form>
        </section>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};