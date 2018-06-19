import React, { Component } from "react";

export default class Edit extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description: "", 
            date: "",
            time: "",
            color: ""
        }
        this.resetInput = this.resetInput.bind(this);
    }

    resetInput() {
        if(this.props.reset) {
            this.setState({
                title: "", 
                description: "", 
                date: "",
                time: ""
            })
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
            <div className="editPage">
                <input type="text" placeholder="title" onChange={(e) => this.getTitle(e)}/>
                <input type="text" placeholder="description"  onChange={(e) => this.getDescription(e)}/>
                <input type="text" placeholder="month day"  onChange={(e) => this.getDate(e)}/>
                <input type="text" placeholder="time"  onChange={(e) => this.getTime(e)}/>
                <button className="Submit" onClick={() => this.props.postEvent(this.state)}>Submit</button>
            </div>
        )
    }
}