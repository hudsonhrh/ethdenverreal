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

const SectionTitle = styled.h1`
  margin-bottom: 10%;
`;

const mockTaskData = [
  {
    title: "Open Task 1",
    description: "Long description of open task 1",
    status: "open",
  },
  {
    title: "Open Task 2",
    description: "Long description of open task 2",
    status: "open",
  },
  {
    title: "Open Task 3",
    description: "Long description of open task 3",
    status: "open",
  },
];

const Tasks = () => {
  const items = mockTaskData.map((item) => (
    <TaskCard
      key={item.title}
      title={item.title}
      description={item.description}
      status={item.status}
    ></TaskCard>
  ));

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
            <SectionTitle>Open Tasks</SectionTitle>
            {items}
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
            <SectionTitle>In Progress</SectionTitle>
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
            <SectionTitle>In Review</SectionTitle>
            <TaskCard>task1</TaskCard>
          </Stack>
        </Column>
      </Wrapper>
    </>
  );
};

export default Tasks;
