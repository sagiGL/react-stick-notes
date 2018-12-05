import React, {Component } from 'react';
import {FaPencilAlt,FaTrash,FaSave} from 'react-icons/fa';
import '../css/Note.css';
import {randomColor} from 'randomcolor';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state= {
            editing: false,
            color: randomColor({
                luminosity: 'light',
                hue: 'random'
            })
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    remove() {
        this.props.onRemove(this.props.index)
    }

    save(e) {
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }

    renderForm() {
        return (
            <div className={'sticky-note'} style={{ background: this.state.color}}>
                <form onSubmit={this.save}>
                    <textarea className={'noteTextarea'} ref={input => this._newText = input}/>
                    <button className={'noteButton'} onClick={this.save}><FaSave/></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className={'sticky-note'} style={{ background: this.state.color}}>
                <p>{this.props.children}</p>
                <span className={'noteButtons'} >
                    <button className={'noteButton'} onClick={this.remove} id={'remove'}><FaTrash/></button>
                    <button className={'noteButton'} onClick={this.edit} id={'edit'}><FaPencilAlt/></button>
                </span>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Note;