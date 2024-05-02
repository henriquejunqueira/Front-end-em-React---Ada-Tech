import React from 'react';
import logoImg from '../../assets/img/logo.png';

import './styles.css'; // ! css importado da pasta de componentes Navbar

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
