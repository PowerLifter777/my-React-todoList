import React from "react";
import classes from './PostControlls.module.css';

const PostControlls = (props) => {
    return (
        <div>
            <input
                className={classes.postColor_input}
                type="color"
                value={props.post.color}
                style={props.post.color !== "#dedeca" ? { opacity: 0.9 } : { opacity: 0.4 }}
                onChange={(e) => props.callback_color(e.target.value, props.post)}
            />
            <button
                className={classes.postColor_button}
                onClick={() => props.callback_remove(props.post)}
            >
                X
            </button>
            {/* <input
                className={classes.postColor_input}
                type="checkbox"
                value={props.post.color}
                style = {props.post.color !== "#dedeca"? {opacity: 0.4} : {opacity: 0.4}}
                // onChange={(e) => e.target.value===}
            /> */}
        </div>
    )
}

export default PostControlls;