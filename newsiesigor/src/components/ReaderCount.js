import React, { useState } from 'react';


const ReaderCount = () => {
    const [counter, setCounter] = useState(0)

    const onBtnClick = () => {
        setCounter(counter + 1)     // OR setCounter(prevCounter => prevCounter + 1)
    }
    
    return (
        <>
        <p> There have been 0 readers</p>
        <button>I've read </button>  
        </>
    )
}



export default ReaderCount;
