interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

type CartItem = {
  id: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
};
