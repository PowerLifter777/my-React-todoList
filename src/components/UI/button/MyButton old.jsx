import React from "react";
import classes from './MyButton.module.css';

// const MyButton = ({ children, button, onClick }) => {
const MyButton = ({ children, ...props }) => {
    // console.log(`${children} = ${props.button.isActive}`);
    return (
        <button 
            // onClick={onClick}
            // onClick={props.onClick}
            {...props}
            disabled={!props.button.isActive}
            className={`${classes.header__button} ${props.button.isActive ? classes.active : ''}`}
        >
            {children}
        </button>
    )
}

export default MyButton;