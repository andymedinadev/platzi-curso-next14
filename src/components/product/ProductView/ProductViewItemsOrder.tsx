'use client';
import { SyntheticEvent, useState } from 'react';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import { FaCartShopping } from 'react-icons/fa6';
import styles from './ProductViewItemsOrder.module.css';

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: Product;
}

export const ProductViewItemsOrder = ({ maxQuantity, product }: ProductViewItemsOrderProps) => {
  const { title, id, price, image } = product;
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();

    addToCart({
      id,
      price,
      quantity: counter,
      title,
      image,
    });
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form className={styles.ProductViewItemsOrder__form}>
        <button className={styles.ProductViewItemsOrder__submit} onClick={handleAddToCart}>
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
