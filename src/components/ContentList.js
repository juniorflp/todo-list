import React from "react";
import { UseDataContext } from "../context/AuthContext";
import { Container, Icone, Tarefa } from "./StyleList";
import "../style.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContentList = () => {
  const { task, setTask, setEditTask, editTask } = UseDataContext();

  function handleChange(id) {
    const newItens = task.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setTask(newItens);
  }

  function isDelete(id) {
    const del = task.filter((item) => item.id !== id);
    window.confirm("você tem certeza que deseja excluir esta tarefa?");
    setTask(del);
  }
  function isUpDate(id) {
    const findTask = task.find((item) => item.id === id);
    setEditTask(findTask);
  }

  return (
    <Container>
      {task.map((item, index) => (
        <Tarefa key={index} checked={item.done}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => {
              handleChange(item.id);
            }}
          />
          <label> {item.title}</label>
          <Icone>
            <FontAwesomeIcon
              icon={faPencil}
              color="#ffb821"
              onClick={() => {
                isUpDate(item.id);
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              color="#ff2121"
              onClick={() => {
                isDelete(item.id);
              }}
            />
          </Icone>
        </Tarefa>
      ))}
    </Container>
  );
};
