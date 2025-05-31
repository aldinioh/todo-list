// The actual shortcut is hardcoded, even if you were to display a different combination
// it will not work.

import './shortcut.css'

import React from 'react'

type ShortcutProps = {
    icon: string
    combination: string
}

const Shortcut = ({ icon, combination }: ShortcutProps) => {
  return (
    <div className='shortcut'>
        <span className={ icon }></span>
        <p>{ combination }</p>
    </div>
  )
}

export default Shortcut