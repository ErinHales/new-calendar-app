import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/header.js";
import Calendar from "./components/calendar.js";
import Edit from "./components/edit.js";
import ChangeThemes from "./components/changeTheme.js";
import EventInfo from "./components/eventInfo.js";
import _ from "lodash";
import "./reset.css";
import "./App.css";

var baseURL = "http://localhost:3000/api/calendar";

const Main = {
  "--main-color": "#FF847C",
  "--color-two": "#99B898",
  "--color-three": "#FECEA8",
  "--color-four": "#E84A5F",
  "--color-five": "#2A363B",
  "--color-six": "FFFFFF"
}

const Lavender = {
  "--main-color": "#8C759F",
  "--color-two": "#FACDBE",
  "--color-three": "#F4B8C7",
  "--color-four": "#D3ADD1",
  "--color-five": "#FEEEC8",
  "--color-six": "FFFFFF"
}

const Pastel = {
  "--main-color": "#D2E0F2",
  "--color-two": "#E3FFFB",
  "--color-three": "#D6FFD9",
  "--color-four": "#FBECE9",
  "--color-five": "#FEFFE1",
  "--color-six": "000000"

}

const Beach = {
  "--main-color": "#D8CFB5",
  "--color-two": "#99E1D9",
  "--color-three": "#F0F7F4",
  "--color-four": "#70ABAF",
  "--color-five": "#705D56",
  "--color-six": "FFFFFF"
}

const BlackAndWhite = {
  "--main-color": "#D3D3D3",
  "--color-two": "rgba(0,0,0,0.8)",
  "--color-three": "rgba(0,0,0,0.6)",
  "--color-four": "rgba(0,0,0,0.7)",
  "--color-five": "rgba(0,0,0,0.5)",
  "--color-six": "FFFFFF"
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      year: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      edit: false,
      months: true,
      dropDown: false,
      reset: false,
      color: Main,
      popUp: false,
      data: [],
      events: {}
    }
    this.displayEdit = this.displayEdit.bind(this);
    this.postEvent = this.postEvent.bind(this);
  }

  componentDidMount() {
    axios.get(baseURL).then(res => {
        var events = _.groupBy(res.data, "date")
        this.setState({
          data: res.data,
          events: events
        });
    })
  }
  
  postEvent = (inputValues) => {
    const { title, description, date: inputDate, time } = inputValues;
    const { year } = this.state;
    var newDate = inputDate.split(" ");
    var monthIndex = year.indexOf(newDate[0]);
    newDate[0] = monthIndex;
    var date = newDate.join(" ");
    if ( title.length !== 0 && inputDate.length !== 0) {
      axios.post( baseURL, { title, description, date, time } ).then( response => {
        var events = _.groupBy(response.data, "date")
        this.setState({ 
          data: response.data,
          events: events,
          reset: true
        });
      });
    }
  }

  deleteEvent = (id) => {
    console.log(id);
    var {data} = this.state;
    for(var i=0; i<data.length; i++) {
      if(data[i].id === Number(id)) {
        axios.delete(`${baseURL}/${id}`).then(response => {
          var events = _.groupBy(response.data, "date");
          this.setState({
            data: response.data,
            events: events,
            popUp: false
          })
        })
      }
    }
  }

  editEvent = (id, eventInfo) => {
    const {title, description, date, time} = eventInfo;
    axios.put(`${baseURL}/${id}`, {title, description, date, time, id}).then(response => {
      var events = _.groupBy(response.data, "date");
      this.setState({
        data: response.data,
        events: events,
        popUp: false
      })
    })
  }

  displayEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  displayWeeks = () => {
    this.setState({
      months: false
    })
  }

  displayMonths = () => {
    this.setState({
      months: true
    })
  }

  displayThemeChanger = () => {
    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  hideEventInfo = () => {
    this.setState({
      popUp: false
    })
  }

  displayEventInfo = (dataParam) => {
    this.setState({
      popUp: true,
      eventData: dataParam
    })
  }

  setTheme = (themeNum) => {
    var themeArr = [Main, Lavender, Pastel, Beach, BlackAndWhite];
    this.setState({
      color: themeArr[themeNum]
    })
    }

  render() {
    return (
      <div className="body"style={this.state.color}>
        <div className="top">
          {this.state.popUp ? <EventInfo hideEventInfo={this.hideEventInfo} eventData={this.state.eventData} deleteEvent={this.deleteEvent} editEvent={this.editEvent} /> : null }
          <Header displayEditFn={this.displayEdit} displayThemeChanger={this.displayThemeChanger}/>
          {this.state.dropDown ? <ChangeThemes setTheme={this.setTheme} /> : null }
          {this.state.edit ? <Edit data={this.state.data} postEvent={this.postEvent} reset={this.state.reset} /> : null }
        </div>
        {this.state.months ? <Calendar data={this.state.data} displayEventInfo={this.displayEventInfo} events={this.state.events} /> : null }
      </div>
    );
  }
}
export default App;
