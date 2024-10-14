"use client"; // Ensure this component is rendered on the client side

import Link from 'next/link';
import styles from './Navbar.module.css';
import { signIn, signOut } from "next-auth/react";

const Navbar = ({ userName }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>My Application</h1>
        <div className={styles.navLinks}>
   <Link  className={styles.navLink} href="/" >     Home </Link>
        </div>
        <div>
          {userName ? (
            <>
              <span style={{ marginRight: '1rem' }}>Hello, {userName}</span>
              <button className={`${styles.button} ${styles.signOutButton}`} onClick={() => signOut()}>
                Sign Out
              </button>
              <Link  className={styles.navLink} href="/profile" >     Profile </Link>
            </>
          ) : (
            <div> 
                              <button className={styles.button} >   <Link  className={styles.navLink} href="/login" >     Sign In </Link></button>
                              <button className={styles.button} >   <Link  className={styles.navLink} href="/register" >     register </Link></button>
            </div>

          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;