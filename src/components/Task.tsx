import { Trash } from "phosphor-react";
import CheckMark from "./CheckMark";
import styles from "./Task.module.css";

interface TaskProps {
  description:string;
  isDone: boolean;
}

export function Task(task: TaskProps) {
  return (
    <div>
      <label  className={styles.container}> 
        <input type="checkbox"/>
        <CheckMark isChecked={task.isDone} />
        <span className={styles.description}>{task.description}</span>
        <Trash size={24}/>
      </label>
    </div>
  )
}