import Shortcut from '../../elements/Shortcut/Shortcut';
import './inputButton.css'

import React from 'react'

type InputButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  placeholder?: string;
};

const InputButton = ({ id, placeholder, ...rest }: InputButtonProps) => {
  return (
    <label className='input-button-container'>
      <div>
        <span className="mgc_add_line"></span>
        <input
          id={id}
          type='text'
          placeholder={placeholder}
          {...rest}
        />
        <Shortcut shortcutKey='T' />
      </div>
    </label>
  )
}

export default InputButton