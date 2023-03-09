import React from 'react';

export default function Header() {
    return (
        <nav className='sticky top-0 bg-slate-900 h-16 flex justify-between items-center px-10'>
            <div className='font-A font-bold color-B text-4xl'><a href="#overview">ABCHECKERS</a></div>
            <ul className='font-A font-bold color-B text-xl flex gap-10'>
                <li><a href="#overview">OVERVIEW</a></li>
                <li><a href="#overview">DATA</a></li>
                <li><a href="#overview">METHODS</a></li>
                <li><a href="#overview">RESULTS</a></li>
                <li><a href="#overview">TEAM</a></li>
            </ul>
        </nav>
    );
}
