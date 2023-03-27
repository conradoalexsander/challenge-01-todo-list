import { Trash } from "phosphor-react";
import { Task } from "../types/Task";
import CheckMark from "./CheckMark";
import styles from "./TaskItem.module.css";

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
      <label className={styles.container}>
        <input type="checkbox"/>
        <div className={styles.checkMarkIcon}>
          <CheckMark isChecked={task.isDone} onCheckMarkClicked={onCheckMarkCliked}/>
        </div>
        <div className={`${styles.description}`}>
          <span className={`${task.isDone ? styles.doneTaskText : ""}`}>{task.description}</span>
        </div>
        <div>
          <Trash className={styles.trashIcon} onClick={onDeleteTask} size={24}/>
        </div>
      </label>
    </div>
  )
}