import React, { useState } from 'react';


const ReaderCount = () => {
    const [readsCount, serReadsCount] = useState(0)
    

    const increaseReadsCount = () => {
        serReadsCount(prevCount=> prevCount +1)
    }
    return (
        <>
        <p> There have been <span role="figure">{readsCount}</span> readers</p>
        <button aria-label="Read story" onClick={increaseReadsCount}>I've read </button>  
        </> 
    )
}



export default ReaderCount;
