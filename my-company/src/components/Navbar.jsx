import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/services">Services</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;