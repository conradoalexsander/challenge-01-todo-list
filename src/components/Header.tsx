import logo from '../assets/todo-list-logo.svg';
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
        <img src={logo} alt="" />
    </div>
  )
}