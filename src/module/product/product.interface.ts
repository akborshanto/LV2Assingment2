

export interface TProduct {
  name: string;
  brand: string;
  price: number;
  type: string; // Consider using a union type if the type values are predefined, e.g., 'Road' | 'Mountain' | 'Hybrid'
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted?: boolean; // Optional field
}
