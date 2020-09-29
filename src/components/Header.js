import React from "react";

function Header() {
    return (
        <header className="Header"> 
            <div>
                <h1> Header Title </h1>
            </div>
            <nav>
                <a href="#"> Jakarta </a>
                <a href="#"> Sydney </a>
                <a href="#"> Seattle </a>
                <a href="#"> Tokyo </a>
                <a href="#"> London </a>
            </nav>
        </header>
    );
}

export default Header;