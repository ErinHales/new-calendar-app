import React, {Component} from "react";
import EditFalse from "./editFalse.js";
import EditTrue from "./editTrue.js";

export default class EventInfo extends Component {
    constructor() {
        super();

        this.state = {
            edit: false
        }
    }

    editToggle() {
        this.setState({
            edit: !this.state.edit
        })
    }

    render () {
        return (
            <div>
                <div className="fadeOut"></div>
                <div className="editBox">
                    <button className="exitButton" onClick={() => this.props.hideEventInfo()}>X</button>
                    <button className="editButton" onClick={() => this.editToggle()}>Edit</button>
                    <button className="deleteButton" onClick={() => this.props.deleteEvent(this.props.eventData.id)}>Delete</button>
                    { this.state.edit ? <EditTrue editEvent={this.props.editEvent} eventData={this.props.eventData} editToggle={this.editToggle} /> : <EditFalse eventData={this.props.eventData} /> }
                </div>
            </div>
        )
    }
}