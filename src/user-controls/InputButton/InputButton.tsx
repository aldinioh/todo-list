import Shortcut from '../../elements/Shortcut/Shortcut';
import './inputButton.css'

import React from 'react'

type InputButtonProps = {
  placeholder?: string;
};

const InputButton = ({ placeholder }: InputButtonProps) => {
  return (
    <label className='input-button'>
        <div>
            <span className="mgc_add_line"></span>
            <input type='text' placeholder={placeholder}></input>
            <Shortcut icon='mgc_command_line' combination='J' />
        </div>
    </label>
  )
}

export default InputButton