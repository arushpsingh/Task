import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useUserContext } from "./context/UserContext";
import TodoModal from "./TodoModal";

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  padding-bottom: 20px;
`;

const TaskContainer = () => {
  const {
    inputTitle,
    inputDescription,
    setInputTitle,
    setInputDescription,
    toggleBtn,
    handleSubmit,
    setOpen,
  } = useUserContext();
  return (
    <StyledContainer>
      <StyledTextField
        size="small"
        id="outlined-basic"
        label="Enter Title"
        variant="outlined"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <StyledTextField
        size="small"
        id="outlined-basic"
        label="Enter Description"
        variant="outlined"
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
      />
      <Button
        sx={{ background: "#000" }}
        variant="contained"
        onClick={handleSubmit}
      >
        {toggleBtn ? "Add" : "Update"}
      </Button>
      <Button sx={{ color: "#535151" }} onClick={() => setOpen(true)}>
        View Todos
      </Button>
      <TodoModal />
    </StyledContainer>
  );
};

export default TaskContainer;
