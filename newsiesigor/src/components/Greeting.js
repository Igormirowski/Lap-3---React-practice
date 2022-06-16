import React, { useState } from 'react';



const Greeting = () => {
    return (
        <>
        <h3 aria-label="greeting">Hi there, username/friend!</h3>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="That's not my name"/>
            <input type="submit" value="Update!"></input>
        </form>
        </>
    )
}


export default Greeting;
