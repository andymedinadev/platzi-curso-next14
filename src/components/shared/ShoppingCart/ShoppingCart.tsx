'use client';
import { useState } from 'react';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCart.module.css';

export const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useShoppingCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.shoppingCart} onClick={handleOpen}>
        <span className={styles.shoppingCart__counter}>{totalQuantity}</span>
        <FaShoppingCart className={styles.shoppingCart__icon} />
      </button>
      {isOpen && (
        <div className={styles.shoppingCart__items}>
          {cart.map((item) => (
            <>
              <p key={item.id}>{item.title}</p>
              <p>Cantidad: {item.quantity}</p>
            </>
          ))}
          <button className={styles.shoppingCart__buyButton}>Buy</button>
        </div>
      )}
    </>
  );
};
