import React, { useState } from 'react'
export default function Button() {
    const [buttonText, setButtonText] = useState("'click me',please")
    function handleClick() {
        return setButtonText("Thanks,been clicked!")
    }
    return <button onClick={handleClick}>{buttonText}</button>
}