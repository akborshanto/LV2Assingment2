import { z } from 'zod';

export const ProductValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'), // Ensure it's not empty
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be a positive number'),
  type: z.string().min(1, 'Type is required'), // Allow any non-empty string
  description: z.string().min(1, 'Description is required'),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean(),
  isDeleted: z.boolean().optional(), // Optional field
});
