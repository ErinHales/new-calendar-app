import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="headTitle">Calendar Application</h1>
            <div className="menu">
                <div className="toggleDisplay">
                    <button>Months  |</button>
                    <button>Weeks</button>
                </div>
                <button className="createEvent" onClick={() => props.displayEditFn()}>Create Event!</button><br/>
                <button className="changeTheme" onClick={() => props.displayThemeChanger()}>Change Theme</button>
            </div>
        </div>
    )
}