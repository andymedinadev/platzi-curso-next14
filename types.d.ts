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
  title: string;
  price: number;
  quantity: number;
  id: number;
};
