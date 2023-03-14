import styles from './App.module.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';
import "./global.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Input />
      <TaskList />
    </div>
  )
}

export default App
