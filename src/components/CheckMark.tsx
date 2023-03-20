import { Check, Circle } from "phosphor-react";
import styles from "./CheckMark.module.css";
interface CheckMarkProps {
    isChecked: boolean;
}

export default function CheckMark(checkmark:CheckMarkProps) {
  return (  
    <div className={checkmark.isChecked ? styles.checkMarkIconContainer : ""}>
        {checkmark.isChecked 
        ? <Check className={styles.checkedMarkIcon} size={16} weight="bold" /> 
        : <Circle className={styles.uncheckedMarkIcon} size={24} weight={"duotone"} />} 
    </div>
  )
}