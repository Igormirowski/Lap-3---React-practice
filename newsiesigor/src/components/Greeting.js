import React, { useState } from 'react';



const Greeting = () => {
    const [username, setUsername] = useState('friend')
    const [nameInput, setNameInput] = useState('') // control my input


    const handleInput = (e) => {
        setNameInput(e.target.value)
    }
    
    const handleFormSubmit = (e)=> {
    e.preventDefault()
    setUsername(nameInput)
    setNameInput('') //clear name after type and enter
}

    return (
        <>
        <h3 aria-label="greeting">Hi there,{username}!</h3>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text"
            id="username" 
            placeholder="That's not my name" 
            value={nameInput}
            onChange={handleInput}
            />
            <input type="submit" value="Update!"></input>
        </form>
        </>
    )
}


export default Greeting;
