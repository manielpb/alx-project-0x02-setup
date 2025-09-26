import React from 'react';
import about from '@/pages/about';
import home from '@/pages/home';

export default function Header(){

    return(
        <>
            <header>
                <nav>
                    <a href='home'>Home</a>
                    <a href='about'>About</a>
                </nav>
            </header>
        </>
    )
}
