import styles from "./TaskSummary.module.css";

interface TaskSummaryProps {
  createdTasks: Number;
  completedTasks: Number;
}

export default function ({ createdTasks, completedTasks }: TaskSummaryProps) {
  function GetCompletedTasksSummaryMessage() {
   return completedTasks > 0 ? `${completedTasks} de ${createdTasks}` : `${completedTasks}`;
  }
  
  return (
    <div className={styles.taskSummary}>
        <div className={styles.summaryWrapper}>
            <p>Tarefas criadas</p>
                <div className={styles.summaryCounter}>
                    <span>{createdTasks.toString()}</span>
                </div>           
        </div>
        <div className={styles.summaryWrapper}>
            <p>Concluídas</p>
                <div className={styles.summaryCounter}>
                   <span>{GetCompletedTasksSummaryMessage()}</span>
                </div>           
        </div>
    </div>
  )
}