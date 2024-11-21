import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { ProductType } from '../types/product-type';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axios.get('https://fakestoreapi.com/products');
        setIsLoading(false);
        setProducts(products.data);
      } catch (err) {
        const error = err as AxiosError;
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
  };
};
