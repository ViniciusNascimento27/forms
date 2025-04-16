import React from "react";
import './NewButton.css'

const NewButton = (props) => {
    return (
            <button className="new-button"> {props.children} </button>
    )
}

export default NewButton;