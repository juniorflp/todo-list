import React from "react";
import { UseDataContext } from "../context/AuthContext";

export const NumeroTask = () => {
  const { task } = UseDataContext();

  const taskDone = task.filter((item) => item.done);
  console.log("task", taskDone);

  return (
    <div>
      <p style={{ color: "#d3d3d3" }}>
        Tarefas concluidas{"   "}
        {taskDone.length} / {task.length}
      </p>
    </div>
  );
};
