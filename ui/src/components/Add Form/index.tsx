import React from 'react'
import classes from './index.jss'

type Props = {}

const AddForm = (props: Props) => {
  const styles = classes();
  return (
    <form className={styles.form}>
        <div>
          <label htmlFor="taskName">Task Name: </label>
          <input type="text" className={styles.nameInput} placeholder='Enter Task Name'/>
        </div>
        <div>
          <label htmlFor="taskDescripton">Task Description: </label>
          <input type="text" className={styles.descInput} placeholder='Enter Task Description' />
        </div>
        <div>
          <button>Add</button>
        </div>

    </form>
  )
}

export default AddForm