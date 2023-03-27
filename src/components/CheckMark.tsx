import { IconProps } from "@phosphor-icons/react";
import { useState } from "react";
import CheckBoxCheckedDefault from "../assets/checkbox-checked-default.svg";
import CheckBoxCheckedHover from "../assets/checkbox-checked-hover.svg";
import CheckBoxUncheckedDefault from "../assets/checkbox-unchecked-default.svg";
import CheckBoxUncheckedHover from "../assets/checkbox-unchecked-hover.svg";
import styles from "./CheckMark.module.css";
interface CheckMarkProps extends IconProps{
    isChecked: boolean;
    onCheckMarkClicked(): void;
}

export default function CheckMark(checkmark:CheckMarkProps) {
  //overkill solution, might update to something simpler later
  const [isHovered, setIsHovered] = useState(false);


  function getCircleImage() {
    return isHovered
    ? <img src={CheckBoxUncheckedHover} className={styles.uncheckedMarkIcon} onClick={checkmark.onCheckMarkClicked}/>
    : <img src={CheckBoxUncheckedDefault} className={styles.uncheckedMarkIcon} onClick={checkmark.onCheckMarkClicked}/>
  }

  function getCheckImage() {
    return isHovered
    ? <img src={CheckBoxCheckedHover} className={styles.uncheckedMarkIcon} onClick={checkmark.onCheckMarkClicked}/>
    : <img src={CheckBoxCheckedDefault} className={styles.uncheckedMarkIcon} onClick={checkmark.onCheckMarkClicked}/>
  }
  
  return(
    <div className={styles.iconWrapper} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      { checkmark.isChecked 
          ? getCheckImage()
          : getCircleImage()}
    </div>
  )
  

}