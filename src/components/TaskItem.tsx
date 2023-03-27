import { Trash } from "phosphor-react";
import { Task } from "../types/Task";
import CheckMark from "./CheckMark";
import styles from "./Task.module.css";

export interface TaskItemProps extends Task {
  deleteTaskHandler(id: string): void;
  handleTaskDone(id: string): void;
}

export function TaskItem(task: TaskItemProps) {
  function onDeleteTask() {
    task.deleteTaskHandler(task.id);
  }

  function onCheckMarkCliked() {
    task.handleTaskDone(task.id);
  }

  return (
    <div>
      <label  className={styles.container}> 
        <input type="checkbox"/>
        <CheckMark isChecked={task.isDone} onCheckMarkClicked={onCheckMarkCliked}/>
        <span className={`${styles.description} ${task.isDone ? styles.doneTaskText : ""}`}>{task.description}</span>
        <Trash onClick={onDeleteTask} size={24}/>
      </label>
    </div>
  )
}