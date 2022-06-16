import React, { useState } from 'react';



const FaveButton = () => {
    const [faved, setFaved] = useState(false)
    const handleFaveBtnClick = () => {
        setFaved(!faved)
    }
    return (
        
        <span
        rolw="switch"
        aria-checked={faved}
        style={{ color: faved ? 'red' : 'grey'}}
        onClick={handleFaveBtnClick}
        >
            ♥
            {/* ★ */}
        </span>
     
    )
}


export default FaveButton;

