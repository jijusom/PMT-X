import React from "react";
import classes from "./ECardBack.jss";

type Props = {
  employeeData: {
    image: string;
    employeeId: number;
    employeeName: string;
    completed: number;
    total: number;
    pending: number;
  };
};

// type Props = {
//   employeeData: {
//     employeeId: number,
//     employeeName: string,
//     completedTasks: string,
//     pendingTasks: string
//   }
// }

export default function ECardBack({ employeeData }: Props) {
  const styles = classes();
  return (
    <>
      <div className={styles.flex1}>
        <div className={styles.flex2}>
          <div className={styles.parent}>
            <p id="num">
              {employeeData.completed}/{employeeData.total}
            </p>
            <p id="txt">Completed</p>
          </div>
          <div className={styles.parent}>
            <p id="num">
              {employeeData.pending}/{employeeData.total}
            </p>
            <p id="txt">In Progress</p>
          </div>
        </div>
        <div>
          <progress
            value={employeeData.completed}
            max={employeeData.total}
          ></progress>
          <span className={styles.progressvalue}>{employeeData.completed}%</span>
          <p>Performance</p>
        </div>
      </div>
    </>
  );
}
