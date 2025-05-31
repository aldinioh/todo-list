import './shortcut.css'

import { useRef } from 'react'

var k = "";

type ShortcutProps = {
    shortcutKey: string
}

const Shortcut = ({  shortcutKey }: ShortcutProps) => {
    k = shortcutKey;

    return (
        <div className='shortcut'>
            <p> { shortcutKey } </p>
        </div>
    )
}

export default Shortcut

document.addEventListener("keypress", function onEvent(event) {
    if(event.code == `Key${k}`) {
        var ele = document.getElementById("task-input-button"); // I feel like ignoring nullable is a bad idea, plus its hard coded
        if(document.activeElement == ele) {
            event.stopPropagation();
            return;
        } 
        
        event.preventDefault();
        ele?.focus();
    }
});