import React from 'react'
import { Outlet } from 'react-router-dom'
import classes from './Header.jss'

type Props = {}

const Header = (props: Props) => {
  const styles = classes();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>PMT-X</p>
        </div>
        <button className={styles.logOutBtn}>
          Log Out
        </button>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Header