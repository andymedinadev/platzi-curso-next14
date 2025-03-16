'use client';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCart.module.css';

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className={styles.shoppingCart}>
      <span className={styles.shoppingCart__counter}>{totalQuantity}</span>
      <FaShoppingCart className={styles.shoppingCart__icon} />
    </button>
  );
};
