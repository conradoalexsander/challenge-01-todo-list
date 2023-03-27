import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../assets/plus-icon.svg';
import styles from './AddTask.module.css';

interface AddTaskProps {
  createNewTaskHandler(text: string): void;
}

export function AddTask({createNewTaskHandler: createNewTaskhandler}: AddTaskProps) {
  const [addTaskText, setAddTaskText] = useState("");

  function handleAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setAddTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if(addTaskText.length > 0) {
      createNewTaskhandler(addTaskText);
      setAddTaskText("");
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.addTaskContainer}>
        <input type="text" value={addTaskText} onChange={handleAddTaskTextChange}  placeholder="Adicione uma nova tarefa"/>
        <button type="submit">Criar <img src={plusIcon}/></button>
      </form>
    </div>
  );
}