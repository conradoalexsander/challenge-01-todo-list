import styles from './AddTask.module.css';

export function AddTask() {
  return (
    <div className={styles.addTaskContainer}>
      <input type="text"  placeholder="Add a new task"/>
      <button>Criar</button>
    </div>
  );
}