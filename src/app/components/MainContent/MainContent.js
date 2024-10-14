import React from 'react';
import Card from '../card';
import styles from './MainContent.module.css'; // Import the CSS module

export default function MainContent({ products, token }) {
  return (
    <main className={styles.mainContainer}>
      {products.map((el) => (
        <Card elem={el} key={el._id} token={token} />
      ))}
    </main>
  );
}