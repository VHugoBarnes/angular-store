export interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  createdAt: string;
  description: string;
  category: Category;
};

interface Category {
  id: number,
  name: string,
  image: string,
};
