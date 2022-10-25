import React, { useState } from "react";
import EmpInfoCard from "../../components/EmpInfoCard";
import { Collapse } from 'antd';
import classes from "./index.jss";
import "./index.css";
import { Tabs } from "antd";
import AddForm from "../../components/AddForm";
import EmpTaskCard from "../../components/EmpTaskCard";

type Props = {};

const { Panel } = Collapse;
const dummyData = [
  {
    "userId": 1,
    "id": 1,
    "name": "delectus aut autem",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "name": "quis ut nam facilis et officia qui",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "name": "fugiat veniam minus",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "name": "et porro tempora",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "name": "laboriosam mollitia et enim quasi adipisci quia",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "name": "qui ullam ratione quibusdam voluptatem quia",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "name": "illo expedita consequatur quia",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "name": "quo adipisci enim quam ut ab",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "name": "molestiae perspiciatis ipsa",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto dignissimos consequuntur laboriosam fuga deserunt amet distinctio" ,
    "completed": false
  },
]

const PendingTasks = () => {
  const styles = classes();
  return(
    <Collapse>
      {dummyData.filter(item => item.completed).map(item => 
        <Panel header={item.name} key={item.id}>
          <div className={styles.accordionContent}>
            <p>{item.desc}</p>
            <button className={styles.completedBtn}>Completed!!</button>
          </div>
        </Panel>
      )}
    </Collapse>
    
  );
};

const CompletedTasks = () => {
  const styles = classes();
  return(
    <div className={styles.completedTaskContainer}>
      {dummyData.filter(item => !item.completed).map(item => 
          <EmpTaskCard name= {item.name} desc={item.desc} />
        )}
    </div>
  );
}

const Employee = (props: Props) => {
  const styles = classes();
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <EmpInfoCard
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
        />
      </div>
      {showAddForm ? (
        <div className={styles.form}>
          <AddForm />
        </div>
      ) : (
        <></>
      )}

      <div className={styles.tasks}>
        <Tabs
          defaultActiveKey="1"
          className={styles.tabs}
          items={[
            {
              label: `Pending`,
              key: "1",
              children: <PendingTasks />,
            },
            {
              label: `Completed`,
              key: "2",
              children: <CompletedTasks />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Employee;
