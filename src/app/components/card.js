import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Card.module.css'; // Make sure to create this CSS module

function Card({ elem }) {
  return (
    <div className={styles.card}>
      <span className={styles.filter}></span>
      <Image
        src={elem.url}
        alt={elem.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.priceTag}>{elem.price} دت</div>
      <div className={styles.nameTag}>{elem.name}</div>
      <div className={styles.content}>
        {elem.name}
        <Link href={`/edit/${elem._id}`}>
          <button className={styles.editButton}>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;