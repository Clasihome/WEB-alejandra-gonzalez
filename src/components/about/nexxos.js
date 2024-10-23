import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import { Section, Button } from '../../styled-components';
import Nexxos from '../carousels/nexxos';

const SectionCustom = styled(Section)`
  background-color: ${props=> props.theme.primaryColor};
`
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 540px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;    
  padding-top: 1rem;  
  @media (min-width: 768px){
    max-width: 720px;
    padding: 2rem 15px;
  }    
  @media (min-width: 992px){
    max-width: 480px;
    padding: 2rem 15px;
  }
`
const Image = styled.img`
  width: 600px;
  margin-top:5rem;
  height: 150px;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Row noGutters>
      <Col xs={12} md={12} lg={6}>
          <InfoCont>
            <Nexxos />
          </InfoCont>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Image src={state.home.about.banner.image2} />
        </Col>        
       
      </Row>
    </SectionCustom>
  )
}