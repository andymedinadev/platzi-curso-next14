'use client';
import { useState } from 'react';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import { ShoppingCartItem } from './ShoppingCartItem';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useShoppingCart();

  const hasItems = cart.length > 0;
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.shoppingCart}>
      {hasItems && <span className={styles.shoppingCart__counter}>{cart.length}</span>}
      <button className={styles.shoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      {isOpen && hasItems && (
        <div className={styles.shoppingCart__items}>
          {cart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button className={styles.shoppingCart__buyButton}>Buy</button>
        </div>
      )}
    </div>
  );
}
