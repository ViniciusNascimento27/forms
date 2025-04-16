import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Desenvolvido por Vinicius Schürhaus do Nascimento © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
