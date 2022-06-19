import React, { useEffect } from "react";
import { UseDataContext } from "../context/AuthContext";
import { Container } from "./StyleSearch";

export const SearchBar = () => {
  const {
    newTask,
    setNewTask,
    task,
    setTask,
    novaTarefa,
    setEditTask,
    editTask,
  } = UseDataContext();

  const upDateTask = (title, id, done) => {
    const taskNew = task.map((item) =>
      item.id === id ? { title, id, done } : item
    );
    setTask(taskNew);
    setEditTask("");
  };
  useEffect(() => {
    if (editTask) {
      setNewTask(editTask.title);
    } else {
      setNewTask("");
    }
  }, [setNewTask, editTask]);

  function onSubmit(e) {
    e.preventDefault();
    if (newTask.length > 0 && !editTask) {
      setTask([...task, novaTarefa]);
      setNewTask("");
    } else {
      upDateTask(newTask, editTask.id, editTask.done);
    }
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        ➕
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </Container>
  );
};
