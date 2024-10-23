import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 5%;
  min-height: 10%;
  max-width: 300px;
  max-height: 400px;
  object-fit: contain;
  object-position: center;
  margin-left: -1rem; /* Mantiene el ajuste hacia la izquierda */
  margin-top: -2rem; /* Ajusta el valor para moverlo hacia arriba */
`;

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
      <Logo src={dark ? state.logoDark : mobile ? require("../images/logo-light-mobil.png") : state.logo} alt="Logo" />
  )
}