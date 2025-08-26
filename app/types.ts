export interface Product {
  id: string;
  name: string;
  price: number;
  weight: number; // Weight in grams
  origin: string;
  description?: string; // Optional description property
  image?: string; // Optional image property
  rating: number; // Rating from 1-5
  reviewCount: number; // Number of reviews
}
