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
  slug: string;
  name: string;
  image: CategoryImage;
}
