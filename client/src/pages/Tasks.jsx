import React from "react";
import styled from "styled-components";
import Stack from "react-bootstrap/Stack";
import TaskCard from "../components/TaskCard";

const Column = styled.div`
  background: black;
  float: left;
  height: 100%;
  width: 23%;
  display: flex;
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

const StackedColumn = styled(Stack)`
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
`

const Tasks = () => {
  return (
    <Wrapper>
      <Column>
        <Stack
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
        </Stack>
      </Column>
      <Column>
        <Stack style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}>
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
        </Stack>
      </Column>
      <Column>
        <Stack style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}>
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
          <TaskCard>task1</TaskCard>
        </Stack>
      </Column>
    </Wrapper>
  );
};

export default Tasks;
