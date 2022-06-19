import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tarefas")) || [];

  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  const novaTarefa = { id: task.length + 1, title: newTask, done: false };

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(task));
  }, [task]);

  return (
    <AuthContext.Provider
      value={{
        task,
        setTask,
        newTask,
        setNewTask,
        novaTarefa,
        editTask,
        setEditTask,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UseDataContext = () => useContext(AuthContext);
