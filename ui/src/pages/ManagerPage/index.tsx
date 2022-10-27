import React, { useState } from "react";
import ECardBack from "./ECardBack/ECardBack";
import ECardFront from "./ECardFront/ECardFront";
import classes from "./index.jss";
import { useEffect } from "react";
import axios from "axios";

// type ITeamMember = {
//   employeeId: number;
//   employeeName: string;
//   completedTasks: number;
//   pendingTasks: number;
// };

const dummyData = [
  {
    image:
      "http://pm1.narvii.com/7080/e95dff1da38b051096bf9eed02c80a379ba74f93r1-492-623v2_hq.jpg",
    employeeId: 1,
    employeeName: "Sabiha",
    completed: 0,
    total: 10,
    pending: 10,
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90",
    employeeId: 2,
    employeeName: "Sambhav",
    completed: 10,
    total: 10,
    pending: 0,
  },
  {
    image:
      "https://i.pinimg.com/originals/34/d7/d5/34d7d56b3bf354d69700632d03b56a8f.jpg",
    employeeId: 3,
    employeeName: "Sabiha",
    completed: 0,
    total: 10,
    pending: 10,
  },
  {
    image:
      "http://pm1.narvii.com/7080/e95dff1da38b051096bf9eed02c80a379ba74f93r1-492-623v2_hq.jpg",
    employeeId: 4,
    employeeName: "Sabiha",
    completed: 0,
    total: 10,
    pending: 10,
  },
  {
    image:
      "http://pm1.narvii.com/7080/e95dff1da38b051096bf9eed02c80a379ba74f93r1-492-623v2_hq.jpg",
    employeeId: 5,
    employeeName: "Sabiha",
    completed: 0,
    total: 10,
    pending: 10,
  },
];

export default function ManagerPage() {
  const styles = classes();

  // const [teamData, setTeamData] = useState<ITeamMember[]>([]);

  // const getTeamData =()=>{
  //   axios.get(`${process.env.REACT_APP_API_URL}/${sessionStorage.getItem(id)}`)
  //   .then((response)=>{
  //     console.log(response);
  //     setTeamData(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }

  // useEffect(() => {
  //   getTeamData();
  // },[]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.profile}>
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/management-system-icon-library/person-15.png"
                  alt="Profile"
                  height={30}
                  width={30}
                />
                <p>Hi, Captain</p>
              </div>
              <div className={styles.profile}>
                <img
                  id="groupIcon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyGfUyNVGSmiYJKOHNr-VpBXr33B99GFCZA&usqp=CAU"
                  alt="Profile"
                />
                <p>My Team</p>
              </div>
              <div className={styles.teamInfo}>
                <p>Team Name: PMT-X</p>
                <p>Team Size: 10</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.employeeCardContainer}>
          {/* {teamData? teamData?.map((item, index: number)=>(
            <div key={item.employeeId} className={styles["flip-card"]}>
              <div className={styles["flip-card-inner"]}>
                <ECardFront employeeData={item}={item}/>
              </div>
              <div className={styles["flip-card-back"]}>
                  <ECardBack employeeData={item} />
                </div>
            </div>
          ))} */}

          {dummyData.map((item, index: number) => (
            <div key={item.employeeId} className={styles["flip-card"]}>
              <div className={styles["flip-card-inner"]}>
                <div className={styles["flip-card-front"]}>
                  <ECardFront employeeData={item} />
                </div>
                <div className={styles["flip-card-back"]}>
                  <ECardBack employeeData={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
