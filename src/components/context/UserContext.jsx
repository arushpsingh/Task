import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (toggleBtn) {
      const data = {
        id: Math.random() * 10,
        inputTitle: inputTitle,
        inputDescription: inputDescription,
      };
      setTasks([...tasks, data]);
    } else {
      const updatedData = tasks.map((ele) => {
        if (ele.id === id) {
          return { ...ele, inputTitle, inputDescription };
        }
        return ele;
      });
      setTasks(updatedData);
      setToggleBtn(true);
      setId(null);
    }
    setInputTitle("");
    setInputDescription("");
    setOpen(true);
  };

  const handleDelete = (data) => {
    const updatedData = tasks.filter((value) => value !== data);
    console.log(updatedData);
    setTasks(updatedData);
    setOpen(false);
    setInputTitle("");
    setInputDescription("");
  };

  const handleUpdate = (index) => {
    const findData = tasks.find((val) => val.id === index);
    setToggleBtn(false);
    setInputTitle(findData.inputTitle);
    setInputDescription(findData.inputDescription);
    setId(index);
    setOpen(false);
  };

  const user = {
    inputTitle,
    setInputTitle,
    inputDescription,
    setInputDescription,
    tasks,
    handleDelete,
    handleUpdate,
    handleSubmit,
    toggleBtn,
    open,
    setOpen,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
