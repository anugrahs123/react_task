import React from "react";
import styled from "styled-components/macro";
function Footer() {
  return <Container>
    <div>
      <h4> www.futuralabs.com</h4>
      <h5>info@thefuturalabs.com</h5>
    
    </div>
    </Container>;
}

export default Footer;

const Container = styled.div`
  background-color: black;
  height: 200px;
  display: flex;
  color: white;
  align-items: center;
  border-top: 1px solid white;
  justify-content: center;
  font-size: 26px;
`;
