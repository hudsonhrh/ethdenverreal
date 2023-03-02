import React from "react";
import styled from "styled-components";
import Stack from "react-bootstrap/Stack";
import ProposalCard from "../components/ProposalCard";

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

const Vote = () => {
  return (
    <>
      <Wrapper>
        <Column>
          <Stack
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2>Open Proposals</h2>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
          </Stack>
        </Column>

        <Column>
          <Stack
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2>Passed Proposals</h2>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
          </Stack>
        </Column>

        <Column>
          <Stack
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2>Rejected Proposals</h2>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
            <ProposalCard>task1</ProposalCard>
          </Stack>
        </Column>
      </Wrapper>
    </>
  );
};

export default Vote;


