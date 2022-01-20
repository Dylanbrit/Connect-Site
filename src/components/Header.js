import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h2>National Health Connect</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/carrierlinks">Carrier Links</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
    </div>
)

export default Header