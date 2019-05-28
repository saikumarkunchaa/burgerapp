import React from 'react';
import clasees from './Toolbar.css';
import Logo from '../../Logo/Logo';

const Toolbar = () => (
    <header className = {clasees.Toolbar}>
        <div>MENU</div>
        <Logo />
            <nav>
            ....
        </nav>
    </header>
);

export default Toolbar;