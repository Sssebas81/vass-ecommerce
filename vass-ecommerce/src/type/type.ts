export type Review = {
  user: string;
  comment: string;
  rating: number;
};

export type Product = {
  id: number;
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  description?: string;
  detail: string;
  sku: string;
  category: string;
  tags: string[];
  colors: string[];
  images: string[];
  reviews: Review[];
};
