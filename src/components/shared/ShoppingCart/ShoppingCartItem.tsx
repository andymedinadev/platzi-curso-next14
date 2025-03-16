'use client';
import Image from 'next/image';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import { FaRegTrashCan } from 'react-icons/fa6';
import styles from './ShoppingCartItem.module.css';

interface ShoppingCartItemProps {
  item: CartItem;
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { removeCartItem } = useShoppingCart();

  return (
    <div className={styles.shoppingCartItem}>
      <Image src={item.image} alt={item.title} width={48} height={48} />
      <div className={styles.shoppingCartItem__itemInfo}>
        <p className={styles.shoppingCartItem__title}>{item?.title}</p>
        <span className={styles.shoppingCartItem__quantity}>x{item.quantity}</span>
      </div>
      <button
        onClick={() => removeCartItem(item)}
        className={styles.shoppingCartItem__removeButton}
        aria-label="trash"
      >
        <FaRegTrashCan className={styles.shoppingCartItem__removeButton__icon} />
      </button>
    </div>
  );
};
