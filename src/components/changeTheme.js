import React from "react";

export default function (props) {
    return (
        <div className="themes">
            <button className="summerPeach" onClick={() => props.setTheme(0)}>Summer Peach</button><br/>
            <button className="lavenderSunset" onClick={() => props.setTheme(1)}>Lavender Sunset</button><br/>
            <button className="pastel" onClick={() => props.setTheme(2)}>Pastel</button><br/>
            <button className="beach" onClick={() => props.setTheme(3)}>Beach</button><br/>
            <button className="blackAndWhite" onClick={() => props.setTheme(4)}>Black and White</button>
        </div>
    )
}