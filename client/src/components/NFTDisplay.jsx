import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NFTCard from "../components/TaskCard";

const Column = styled.div`
  height: 100%;
  width: 20%;
  display: table-cell;
  justify-content: center;
  margin: 5%;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: table;
  width: 100%;
  height: 100%;
`;

const NFTDisplay = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <Col >
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
            </Col>
            <Col >
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
              <NFTCard>task1</NFTCard>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default NFTDisplay;
