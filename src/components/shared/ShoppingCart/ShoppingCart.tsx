'use client';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCart.module.css';

export const ShoppingCart = () => {
  const [countItems, setCountItems] = useState(0);

  return (
    <button className={styles.shoppingCart}>
      <span className={styles.shoppingCart__counter}>{countItems}</span>
      <FaShoppingCart className={styles.shoppingCart__icon} />
    </button>
  );
};
