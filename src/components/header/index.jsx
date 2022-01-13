import React from 'react';

import styled from 'styled-components';

const Header = () => {
  const Navbar = styled.div`
    padding-top: 25px;
    padding-left: 35px;
    h2 {
      font-size: 24px;
      color: #ffff;
      display: inline;
    }
  `;
  const LinksBar = styled.a`
    font-size: 24px;
    color: #ffff;
    display: inline;
    margin-left: 20px;
    cursor: pointer;
  `;
  return (
    <Navbar>
      <h2>Dev Contábil</h2>
      <LinksBar href="/">Quem somos</LinksBar>
      <LinksBar href="/">Serviços</LinksBar>
      <LinksBar href="/">Contato</LinksBar>
    </Navbar>
  );
};

export default Header;
