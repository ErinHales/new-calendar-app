import React from "react";

export default function(props) {
    return(
        <div className={`day ${props.weekDay}`} id={`${props.month} ${props.day}`}>{props.day}<br/>
            <div onClick={() => props.displayFn(props.events[0])}>{props.events ? props.events[0].title : ""}</div>
        </div>
    )
}