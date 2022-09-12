import React from "react";
import classes from './MyButton.module.css';

// const MyButton = ({ children, button, onClick }) => {
const MyButton = ({ children, active, onClick }) => {
    // console.log(`${children} = ${props.button.isActive}`);

    return (
        <button
            onClick={onClick}
            disabled={!active}
            className={`${classes.header__button} ${active && classes.active}`}
        >
            {children}
        </button>
    )
}

export default MyButton;