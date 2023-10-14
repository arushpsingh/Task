import React from "react";
import TaskContainer from "./TaskContainer";
import TodoModal from "./TodoModal";

const Form = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <TaskContainer />
      <TodoModal />
    </div>
  );
};

export default Form;
