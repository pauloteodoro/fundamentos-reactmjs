import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Link to="/">
        <img src={Logo} alt="GoFinances" />
      </Link>

      <nav>
        {document.URL === 'http://localhost:3000/import' ? (
          <>
            <Link className="disabled" to="/">
              Listagem
            </Link>
            <Link className="active" to="/import">
              Importar
            </Link>
          </>
        ) : (
          <>
            <Link className="active" to="/">
              Listagem
            </Link>
            <Link className="disabled" to="/import">
              Importar
            </Link>
          </>
        )}
      </nav>
    </header>
  </Container>
);

export default Header;
