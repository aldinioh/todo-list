import './checkbox.css'

import { useState } from 'react'

type CheckboxProps = {
    label: string
    name: string
    checked: boolean
}

const Checkbox = ({ label, name, checked }: CheckboxProps ) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  return (
    <div className='checkbox-container'>
        <label className='checkbox-label' htmlFor={name} onChange={() => setIsChecked((prev) => !prev)}>
            <input type="checkbox" id={name} name={name} className={isChecked ? "checked" : ""}/>
            <span className='mgc_check_fill'></span>
            {label}
        </label>
    </div>
  )
}

export default Checkbox