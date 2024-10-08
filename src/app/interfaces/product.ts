export interface Product {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CartProduct {
  id: number;
  name: string;
  slug: string;
  count: number;
  price: number;
}

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

interface Include {
  quantity: number;
  item: string;
}

interface Other {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
}

export interface CartSummary {
  totalPrice: number;
  shipping: number;
  tax: number;
}
