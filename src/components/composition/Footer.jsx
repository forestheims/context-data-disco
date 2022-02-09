import React from 'react';
import logo from '../../assets/GitHub_Logo.png';

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/forestheims">
        <img alt="GitHub link" src={logo} style={{ width: '55px' }} />
      </a>
    </footer>
  );
}
