import React, { useState } from 'react';


const ReaderCount = () => {
    const [readsCount, serReadsCount] = useState(0)
    

    const increaseReadsCount = () => {
        serReadsCount(readsCount +1)
    }
    return (
        <>
        <p> There have been {readsCount} readers</p>
        <button onClick={increaseReadsCount}>I've read </button>  
        </>
    )
}



export default ReaderCount;
