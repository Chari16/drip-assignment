import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            {/* <h1>DripC</h1> */}
            <img className="logo" src="https://assets.dripcapital.com/_nuxt/img/drip-logo.3600dbd.svg" alt="logo"/>
            <div className="line-container">
                <hr className="line-break"></hr>
            </div>
        </div>
    )
}