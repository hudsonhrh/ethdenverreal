import React from "react";
import styled from "styled-components";
import Stack from "react-bootstrap/Stack";
import TaskCard from "../components/TaskCard";

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

const Tasks = () => {
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
            <h1>Open Tasks</h1>
            <TaskCard>task1</TaskCard>
            <TaskCard>task1</TaskCard>
            <TaskCard>task1</TaskCard>
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
            <h1>In Progress</h1>
            <TaskCard>task1</TaskCard>
            <TaskCard>task1</TaskCard>
            <TaskCard>task1</TaskCard>
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
            <h1>In Review</h1>
            <TaskCard>task1</TaskCard>
          </Stack>
        </Column>
      </Wrapper>
    </>
  );
};

export default Tasks;
