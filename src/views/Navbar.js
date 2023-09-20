import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (

        <header className="home-header">
        <h1>EstateEase</h1>
        <nav className="navbar">
            <span className="nav-item"><Link to="/">Home</Link></span>
            <span className="nav-item"><Link to="/properties">Properties</Link></span>
            <span className="nav-item"><Link to="/propertiesforsale">Buy</Link></span>
            <span className="nav-item"><Link to="/propertiesforrent">Rent</Link></span>
            <div className="nav-item dropdown">
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>Account</button>
                {/* <span onClick={() => setDropdownOpen(!dropdownOpen)} className="icon">👤</span> */}
                {dropdownOpen && (
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/property-owner">Property Owner</Link>
                    </div>
                )}
            </div>
        </nav>
    </header>


        
      
    );
}

export default Navbar;
