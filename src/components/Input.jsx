import React from 'react';

function Input({ setInputValue }) {
    return (
        <>
            <input type='number' onChange={(e) => setInputValue(e.target.value)} ></input>
        </>
    )
}

export default Input