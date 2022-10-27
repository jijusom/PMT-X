import React from "react";
import classes from "./index.jss";

type Props = {
  showAddForm: boolean;
  setShowAddForm: (a: boolean) => void;
};

const AddForm = (props: Props) => {
  const styles = classes();

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          className={styles.nameInput}
          placeholder="Enter Task Name"
        />
      </div>
      <div>
        <label htmlFor="taskDescripton">Task Description: </label>
        <input
          type="text"
          className={styles.descInput}
          placeholder="Enter Task Description"
        />
      </div>
      <div className={styles.addTask}>
        <button>Add</button>
      </div>
      <div className={styles.closeTask}>
          <img onClick={()=>props.setShowAddForm(false)}
            src="https://cdn.icon-icons.com/icons2/2550/PNG/512/x_circle_icon_152490.png"
            alt="cross"
            width={32}
            height={32}
          />
      </div>
    </form>
  );
};

export default AddForm;
