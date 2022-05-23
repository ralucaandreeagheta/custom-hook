import React from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate = useNavigate();
    const data = 3456;

    console.log(navigate);

    return (
        <>
            <h2>Dashboard</h2>
            <button onClick={() => navigate("/login", { data })}>Go to login</button>

            {/* <Link to="/login">Go to login (link)</Link> */}
        </>
    );
}