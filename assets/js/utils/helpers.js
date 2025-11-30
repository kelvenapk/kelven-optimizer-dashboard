import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Kelven Optimizer</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#optimization">Otimização</a></li>
                    <li><a href="#reports">Relatórios</a></li>
                    <li><a href="#settings">Configurações</a></li>
                </ul>
            </nav>
            <div className="user-profile">
                <span>Usuário</span>
            </div>
        </header>
    );
};

export default Header;// Funções utilitárias globais

