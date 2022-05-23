import React from 'react'
import { useParams } from 'react-router-dom'

function Tweet() {

    const { tweetId } = useParams();

    return (
        <>
            <p>The tweet ID is {tweetId}</p>
        </>
    )
}

export default Tweet