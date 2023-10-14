import React from "react";
import Modal from "@mui/material/Modal";
import { useUserContext } from "./context/UserContext";
import { Box, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff", // Set a valid background color
  border: "2px solid #000",
  boxShadow: 24, // Set a valid box shadow value
  p: 4,
};

const TodoModal = () => {
  const { open, setOpen, tasks, handleDelete, handleUpdate } = useUserContext();
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tasks
          </Typography>
          {tasks.map((data, index) => {
            return (
              <div key={index} style={{ marginTop: "10px" }}>
                <Typography variant="subtitle1">{data.inputTitle}</Typography>
                <Typography variant="body1">{data.inputDescription}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleUpdate(data.id)}
                >
                  Update
                </Button>
                <Button variant="outlined" onClick={() => handleDelete(data)}>
                  Delete
                </Button>
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default TodoModal;
