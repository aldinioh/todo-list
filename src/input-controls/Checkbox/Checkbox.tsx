import './checkbox.css'
import { useState } from 'react'

type CheckboxProps = {
  label: string
  name: string
  checked: boolean
  className?: string
}

const Checkbox = ({ label, name, checked, className = '' }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)
  const element = document.getElementById(name);
  

  return (
    <div className={`checkbox-container ${className}`}>
      <label className="checkbox-label" htmlFor={name}>
        <span className="checkbox-input-container">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={isChecked}
            aria-checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <span className="mgc_check_fill"></span>
        </span>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
