import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    console.log(navigate);

    return (
        <>
            <h2>Login</h2>
            <button onClick={() => navigate(-1)} >Go back</button>
        </>
    );
}