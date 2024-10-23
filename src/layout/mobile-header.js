import React, { useContext, useState, useEffect, Fragment } from 'react'; // Agrega useEffect
import context from '../context';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

import Logo from './logomobil';
import RateBar from './ratebar';
import { NavLink } from '../styled-components';

const Header = styled.header`
  background: linear-gradient(
    to right, 
    ${(props) => `${props.theme.primaryColor}cc`},  /* 80% opacity */
    ${(props) => `${props.theme.primaryColor}88`}   /* 50% opacity */
  );
  position: fixed;
  width: 100%;
  top: ${props => (props.isHidden ? '-250px' : '0')}; /* Cambia el valor según el estado isHidden */
  left: 0;
  height: 300px; /* Establece una altura fija */
  padding: 0; /* Elimina el padding */
  z-index: 1000;
  margin-top:-5rem;
  overflow: hidden; /* Asegura que el contenido no se desborde */
  transition: top 0.3s; /* Añade una transición suave para el desplazamiento */

  * {
    margin: 0;
    padding: 0;
  }
`;

const StyledContainer = styled(Container)`
  padding: 0 !important; /* Elimina el padding del contenedor */
  margin: 0 !important; /* Elimina el margen del contenedor */
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; /* Mantén la altura del nav igual a la del header */
`;

const NavPanel = styled.div`
  background-color: #6d8994;
  height: calc(100vh - 50px); /* Ajusta para que coincida con la altura del Header */
  width: 100vw;
  transition: 500ms ease;
  position: fixed;
  left: ${props => props.visible ? "0" : "100vw"};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`;

const NavItem = styled.li`
  font-size: 2rem;
`;

export default () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Nuevo estado
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Estado para almacenar la posición de scroll anterior
  const state = useContext(context);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setIsHidden(!visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Fragment>
      <Header className="d-lg-none" isHidden={isHidden}>
        <StyledContainer>
          <Navigation>
            <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
              <Logo mobile />
            </AniLink>
            <HamburgerMenu
              isOpen={open}
              menuClicked={() => setOpen(!open)}
              width={24}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="#ffffff"
              borderRadius={0}
              animationDuration={0.5}
            />
          </Navigation>
        </StyledContainer>
      </Header>
      <NavPanel visible={open}>
        <RateBar />
        <NavList>
          <NavItem>
            <AniLink paintDrip hex={state.primaryColor} to="/properties" onClick={() => setOpen(false)} duration={.5}>
              <NavLink light>
                Propiedades
              </NavLink>
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink paintDrip hex={state.primaryColor} to="/about" onClick={() => setOpen(false)} duration={.5}>
              <NavLink light>
                Nosotros
              </NavLink>
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink paintDrip hex={state.primaryColor} to="/contact" onClick={() => setOpen(false)} duration={.5}>
              <NavLink light>
                Contacto
              </NavLink>
            </AniLink>
          </NavItem>
        </NavList>
        <NavList horizontal>
          <NavItem>
            <AniLink href={state.facebook} target="_blank" rel="noopener">
              <NavLink light>
                <FacebookOutlined />
              </NavLink>
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink href={state.instagram} target="_blank" rel="noopener">
              <NavLink light>
                <InstagramOutlined style={{ margin: "0 1rem" }} />
              </NavLink>
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink href={state.twitter} target="_blank" rel="noopener">
              <NavLink light>
                <TwitterOutlined />
              </NavLink>
            </AniLink>
          </NavItem>
        </NavList>
      </NavPanel>
    </Fragment>
  );
};