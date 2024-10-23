import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0; /* Ajusta el valor para bajar el header más cerca del borde superior */
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.1rem 0; /* Reduce el padding para hacer el header más bajo */
`

const Divider = styled.div`
  width: 700px;
  height: 1px;
  background-color: #eace9d;
  margin: -2rem 0; /* Ajusta el margen superior e inferior */
  margin-left: auto; /* Desplaza la línea hacia la derecha */
`;

const Navigation = styled.nav`
  padding: -0.5rem 0; /* Ajusta el padding para reducir la altura del contenedor de navegación */
  display: flex;
  top: 1;
  align-items: center;
  margin-buttom:10px;
  justify-content: space-between;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`

`

export default ({ dark }) => {
  const state = useContext(context);

  return (
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container>
        <Navigation>
          <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
            <Logo dark={dark} light={!dark} />
          </AniLink>
          <NavList horizontal>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  Propiedades
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/about" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  Nosotros
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/contact" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  Contacto
                </NavLink>
              </AniLink>                                    
            </NavItem>
          </NavList>
          
        </Navigation>
        
      </Container>
    </Header>    
  )
}