import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { ProductType } from '../types/product-type';

export const useFetchProduct = (prodId: string) => {
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await axios.get(
          `https://fakestoreapi.com/products/${prodId}`
        );
        setIsLoading(false);
        setProduct(products.data);
      } catch (err) {
        const error = err as AxiosError;
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchProduct();
  }, [prodId]);

  return {
    product,
    isLoading,
    error,
  };
};
