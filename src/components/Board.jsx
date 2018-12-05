import React, { Component } from 'react';
import Note from './Note';
import {FaPlus} from 'react-icons/fa';
import '../css/Board.css';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [
            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    add(newText) {
        this.setState(prevState => ({
            notes: [...prevState.notes,
                {
                    id:this.nextId(),
                    text: newText
                }
            ]
        }))
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    update(newText, i) {
        console.log("updating item at index", i, newText, this.state.notes);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, text: newText}
                )
        }))
    }

    remove(id) {
        console.log('removing item at', id)
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={i}
                  index={i}
                  onChange={this.update}
                  onRemove={this.remove}>
                {note.text}
            </Note>
        )
    }

    render() {
        return (
            <div className={'board'}>
                <h1>Sticky Notes</h1>
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")} id={"addNote"}><FaPlus/></button>
            </div>
        )
    }
}

export default Board;