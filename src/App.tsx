import { useMemo, useState } from 'react';
import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import TaskSummary from './components/TaskSummary';
import "./global.css";
import { Task } from './types/Task';
import { getArrayLength } from './utils/Arrray.utils';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = useMemo(() => {
    const completedTasks = tasks?.filter(task => task.isDone);
    return getArrayLength(completedTasks);
  }, [tasks])

  function createNewTaskHandler(text:string) {
    const newTask : Task = {
      id: crypto.randomUUID(),
      description: text,
      isDone: false
    }

    setTasks([...tasks, newTask]);
  }

  function deleteTaskHandler(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleTaskDone(id: string) {
    const task = tasks.filter(task => task.id === id)[0];
    task.isDone = !task.isDone;

    setTasks([...tasks]);
  }
  
  return (
    <div className={styles.container}>
        <Header />
        <main className={styles.wrapper}>
          <AddTask createNewTaskHandler={createNewTaskHandler}/>
          <div className={styles.tasksContainer}>
            <TaskSummary createdTasks={getArrayLength(tasks)} completedTasks={completedTasks}/>
            <TaskList deleteTaskHandler={deleteTaskHandler} tasks={tasks} handleTaskDone={handleTaskDone}/>
          </div>
        </main>
    </div>
  )
}

export default App
