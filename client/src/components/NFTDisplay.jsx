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
  justify-content: center;
  gap:30px;
`;

  let NFTArray=[]

const Wrapper = styled.section`
  background: papayawhip;
  display: flex;
  height: 100%;
  padding:0px;
  flex: 1 1 1;
`;

const NFTDisplay = () => {
  return (
    <>
      <Wrapper>
            <Column>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
            </Column>
      </Wrapper>
    </>
  );
};

export default NFTDisplay;
