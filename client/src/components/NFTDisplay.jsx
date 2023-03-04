import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NFTCard from "../components/NFTCard";

const Column = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap:30px;
`;


const Wrapper = styled.section`
  background: papayawhip;
  display: flex;
  height: 100%;
  padding-left:15px;
  padding-right:15px;
  flex-direction:column;

`;

const NFTDisplay = () => {
  return (
      <Wrapper>
            <Column>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              </Column>
              <br></br>
              <Column>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
            </Column>
      </Wrapper>
  );
};

export default NFTDisplay;
