import styles from "./TaskSummary.module.css";
export default function () {
  return (
    <div className={styles.taskSummary}>
        <div className={styles.summaryWrapper}>
            <p>Created tasks</p>
                <div className={styles.summaryCounter}>
                    <span>0</span>
                </div>           
        </div>
        <div className={styles.summaryWrapper}>
            <p>Completed tasks</p>
                <div className={styles.summaryCounter}>
                    <span>0</span>
                </div>           
        </div>
    </div>
  )
}