import { Task } from "../types/Task";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  deleteTaskHandler(id: string): void;
  handleTaskDone(id: string): void;
}

export function TaskList({ tasks, deleteTaskHandler, handleTaskDone } : TaskListProps) {
  return (
    <div className={styles.tasksList}>
      {tasks.length > 0 && tasks.map(task =>{
        return (<TaskItem
          key={crypto.randomUUID()}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          deleteTaskHandler={deleteTaskHandler}
          handleTaskDone={handleTaskDone}
        />)
      })}
    </div>
  );
}