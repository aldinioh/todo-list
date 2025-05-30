import './InputButton.css'

import React from 'react'

type InputButtonProps = {
  placeholder?: string;
};

const InputButton = ({ placeholder }: InputButtonProps) => {
  return (
    <label className='input-button'>
        <span className="mgc_add_line"></span>
        <input type='text' placeholder={placeholder}>
        </input>
    </label>
  )
}

export default InputButton