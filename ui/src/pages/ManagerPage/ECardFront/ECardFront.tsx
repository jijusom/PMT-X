import React from "react";
import classes from "./ECardFront.jss";

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

export default function ECardFront({ employeeData }: Props) {
  const styles = classes();
  return (
    <>
      <img
        className={styles["card-img"]}
        src={employeeData.image}
        alt="employee-profile"
      ></img>
      <div>Employee ID: {employeeData.employeeId}</div>
      <div>Employee Name: {employeeData.employeeName}</div>
    </>
  );
}
