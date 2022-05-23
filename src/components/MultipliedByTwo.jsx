import React from 'react';

function MultipliedByTwo({ inputValue }) {
    console.log(inputValue)
    return (
        <>
            <p>Multiplied number: {inputValue * 2}</p>
        </>
    )
}

export default MultipliedByTwo