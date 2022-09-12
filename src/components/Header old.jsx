import React from "react";
import { useState } from "react";
import '../styles/App.css';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Header = ({ create }) => {
    const [buttons, setButtons] = useState([
        { id: 1, name: 'ClrMemory', isActive: false },
        { id: 2, name: 'ClrList', isActive: false },
        { id: 3, name: 'Add New', isActive: false },
        { id: 4, name: 'ClrInput', isActive: false },
        { id: 5, name: 'Back', isActive: false },
        { id: 6, name: 'Forward', isActive: false },
        { id: 7, name: 'MarkPost', isActive: false },
    ]);

    const [post, setPost] = useState('');
    const [inputValue, setInputValue] = useState('');

    const clearInput = (e) => {
        e.preventDefault();
        setButtons(prevState =>
            prevState.map(obj => obj = { ...obj, isActive: false })
        );
        // setButtons(prevState =>
        //     prevState.map((obj, i) => i === 2 ? { ...obj, isActive: false } : obj)
        // );
        setInputValue('');
    }

    const changeActive = () => {
        setButtons(prevState =>
            // prevState.map((obj, i) => i === 3 ? { ...obj, isActive : true? true: false} : obj)
            prevState.map((obj, i) => i === 3 ? { ...obj, isActive: true } : obj)
        );
    }

    const handlerInput = (e) => {
        setPost(e.target.value)
        setInputValue(e.target.value);
        if (e.target.value) {
            setButtons(prevState =>
                prevState.map((obj, i) => i === 2 ? { ...obj, isActive: true } : obj)
            )
            setButtons(prevState =>
                prevState.map((obj, i) => i === 3 ? { ...obj, isActive: true } : obj)
            )
        } else {
            setButtons(prevState =>
                prevState.map((obj, i) => i === 2 ? { ...obj, isActive: false } : obj)
            )
            setButtons(prevState =>
                prevState.map((obj, i) => i === 3 ? { ...obj, isActive: false } : obj)
            )
        }
    }

    const addPost = (e) => {
        e.preventDefault();
        create(post);
        // setInputValue('');
        // setButtons(prevState =>
        //     prevState.map((obj, i) => i === 2 ? { ...obj, isActive: false } : obj)
        // );
        // setButtons(prevState =>
        //     prevState.map((obj, i) => i === 3 ? { ...obj, isActive: false } : obj)
        // );
    }

    const deactivation = () => {
        if (!inputValue) {
            setButtons(prevState =>
                prevState.map((obj, i) => i === 3 ? { ...obj, isActive: false } : obj)
            );
            setButtons(prevState =>
                prevState.map((obj, i) => i === 2 ? { ...obj, isActive: false } : obj)
            );
        }
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
                <MyButton button={buttons[0]} >{buttons[0].name}</MyButton>
                <MyButton button={buttons[1]} >{buttons[1].name}</MyButton>
                <MyButton button={buttons[2]} onClick={addPost} >{buttons[2].name}</MyButton>
                <MyButton button={buttons[3]} onClick={clearInput} >{buttons[3].name}</MyButton>
                <MyButton button={buttons[4]} >{buttons[4].name}</MyButton>
                <MyButton button={buttons[5]} >{buttons[5].name}</MyButton>

            </form>
        </div>

    )
}

export default Header;