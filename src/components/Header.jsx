import React from "react";
import { useState } from "react";
import '../styles/App.css';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const Header = ({ create }) => {
    const [active, setActive] = useState([false, false, false, false, false, false, false]);
    const buttons = ['ClrMemory', 'ClrList', 'Add New', 'ClrInput', 'Back', 'Forward', 'MarkPost']

    const [post, setPost] = useState('');
    const [inputValue, setInputValue] = useState('');

    const clearInput = (e) => {
        e.preventDefault();
        setActive(prev => prev.map((el, i) => el = false))
        setInputValue('');
    }

    const changeActive = () => setActive(() => [...active, active[3] = true])

    const handlerInput = (e) => {
        setPost(e.target.value)
        setInputValue(e.target.value);
        e.target.value ?
            setActive(() => [...active, active[2] = true, active[3] = true])
            :
            setActive(() => [...active, active[2] = false, active[3] = false])
    }

    const addPost = (e) => {
        e.preventDefault();
        create(post);
        // setInputValue('');
        // setActive(prev => prev = [...active, active[2] = false])
        // setActive(prev => prev = [...active, active[3] = false])
    }

    const deactivation = () => {
        if (!inputValue) setActive(() => [...active, active[2] = false, active[3] = false])
    }

    return (
        <div className="header__container">
            <form className='header'>
                <MyInput
                    type='text'
                    placeholder="Сделайте заметку"
                    value={inputValue}
                    onChange={handlerInput}
                    onFocus={changeActive}
                    onBlur={deactivation}
                />
                {buttons.map((button, ind) =>
                    <MyButton
                        active={active[ind]} key={button}
                        onClick={ind === 3 ? clearInput : ind === 2 ? addPost : () => null}
                    >
                        {button}
                    </MyButton>
                )}
            </form>
        </div>
    )
}

export default Header;