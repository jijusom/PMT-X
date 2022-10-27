import React from "react";
import classes from "./index.jss";

type Props = {
  showAddForm: boolean;
  setShowAddForm: (a: boolean) => void;
};

const EmpInfoCard = ({ showAddForm, setShowAddForm }: Props) => {
  const styles = classes();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/management-system-icon-library/person-15.png"
            alt="Profile"
            height={30}
            width={30}
          />
          <p>Hi, Employee</p>
        </div>
        <div className={styles.performance}>
          <progress value={32} max={100} /><span className={styles.progressvalue}>32%</span>
          <p>Your Performance</p>
        </div>
        <div className={styles.addTask}>
          <button
            className={styles.addTaskBtn}
            onClick={() => setShowAddForm(true)}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmpInfoCard;
