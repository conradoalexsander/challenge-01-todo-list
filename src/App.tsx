import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import TaskSummary from './components/TaskSummary';
import "./global.css";

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <main className={styles.wrapper}>
          <AddTask />
          <div className={styles.tasksContainer}>
            <TaskSummary />
            <TaskList />
          </div>

        </main>
    </div>

  )
}

export default App
