import Shortcut from '../../elements/Shortcut/Shortcut';
import './inputButton.css'

import React from 'react'

type InputButtonProps = {
  placeholder?: string;
};

const InputButton = ({ placeholder }: InputButtonProps) => {
  return (
    <label className='input-button-container'>
        <div>
            <span className="mgc_add_line"></span>
            <input id='task-input-button' type='text' placeholder={placeholder}></input>
            <Shortcut shortcutKey='T' />
        </div>
    </label>
  )
}

export default InputButton