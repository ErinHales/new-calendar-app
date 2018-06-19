import React from "react";

export default function(props) {
    var year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = props.eventData.date.split(" ");
    var currentMonth = year[currentDate[0]];
    currentDate[0] = currentMonth;
    var newDate = currentDate.join(" ");
    return (
        <div className="editList">
            <h2>Title: </h2>
            <div className="inputTitle">{props.eventData.title}</div>
            <h2>Description: </h2>
            <div className="inputDescription">{props.eventData.description}</div>
            <h2>Date: </h2>
            <div className="inputDate">{newDate}</div>
            <h2>Time: </h2>
            <div className="inputTime">{props.eventData.time}</div>
        </div>
    )
}