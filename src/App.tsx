import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import "./global.css";

function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
          <AddTask />
          <TaskList />
        </div>
    </div>

  )
}

export default App
