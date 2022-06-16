import React, { useState } from 'react';



const FaveButton = () => {
    const [faved, setFaved] = useState(false)
    const handleFaveBtnClick = () => {
        setFaved(!faved)
    }
    return (
        
        <span
        style={{ color: faved ? 'red' : 'grey'}}
        onClick={handleFaveBtnClick}
        >
            ♥
            {/* ★ */}
        </span>
     
    )
}


export default FaveButton;

