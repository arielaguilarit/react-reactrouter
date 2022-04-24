import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/home">Home</Link>
                <Link to="/service">Service</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </div>
    );
}

export default Navigation;