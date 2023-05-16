import React from 'react';

export default function Header() {
    return (
        <nav className='sticky top-0 flex items-center justify-between h-16 px-5 lg:px-10 bg-A z-50'>
            <div className='text-4xl font-bold font-A color-C'><a href="#overview">CHECKERS🏁</a></div>
            <ul className='hidden gap-10 text-xl font-bold font-A color-C lg:flex'>
                <li><a href="#overview">OVERVIEW</a></li>
                <li><a href="#overview">DATA</a></li>
                <li><a href="#overview">METHODS</a></li>
                <li><a href="#overview">RESULTS</a></li>
                <li><a href="#overview">TEAM</a></li>
            </ul>
        </nav>
    );
}
