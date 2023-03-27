import { IconProps } from "@phosphor-icons/react";
import { Check, Circle } from "phosphor-react";
import styles from "./CheckMark.module.css";
interface CheckMarkProps extends IconProps{
    isChecked: boolean;
    onCheckMarkClicked(): void;
}

export default function CheckMark(checkmark:CheckMarkProps) {
  return (  
    <div className={checkmark.isChecked ? styles.checkMarkIconContainer : ""}>
        {checkmark.isChecked 
        ? <Check className={styles.checkedMarkIcon} size={16} weight="bold" onClick={checkmark.onCheckMarkClicked}/> 
        : <Circle className={styles.uncheckedMarkIcon} size={24} weight={"duotone"} onClick={checkmark.onCheckMarkClicked}/>} 
    </div>
  )
}