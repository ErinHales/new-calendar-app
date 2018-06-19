import React, {Component} from "react";

export default class EditTrue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.eventData.title, 
            description: props.eventData.description, 
            date: props.eventData.date, 
            time: props.eventData.time
        }
    }

    getTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    getDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    getDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    getTime(e) {
        this.setState({
            time: e.target.value
        })
    }

    render() {
        return (
            <div className="editList">
                <h2>Title: </h2>
                <input className="editingInput" type="text" value={this.state.title} onChange={(e) => this.getTitle(e)} />
                <h2>Description: </h2>
                <input className="editingInput" type="text" value={this.state.description} onChange={(e) => this.getDescription(e)} />
                <h2>Date: </h2>
                <input className="editingInput" type="text" value={this.state.date} onChange={(e) => this.getDate(e)} />
                <h2>Time: </h2>
                <input className="editingInput" type="text" value={this.state.time} onChange={(e) => this.getTime(e)} /><br/>
                <button className="editingSubmit" onClick={() => this.props.editEvent(this.props.eventData.id, this.state)}>Update Event</button>
            </div>
        )
    }
}