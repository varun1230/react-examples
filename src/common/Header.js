import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">React Dashboard App</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            <ul>
                                <li>
                                    <NavLink to="/party">Add Party Information</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
