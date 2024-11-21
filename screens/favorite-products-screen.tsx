import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FavoriteProductItem } from '../components/favorite-product-item';
import { ProductsList } from '../components/products-list';
import { useEffect, useState } from 'react';
import { ScreenLoader } from '../components/screen-loader';

export const FavoriteProductsScreen = () => {
  const favoriteProducts = useSelector(
    (state: RootState) => state.favoriteProductsReducer
  );
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 500);
  }, [favoriteProducts]);
  return updated ? (
    <ScreenLoader />
  ) : (
    <ProductsList
      products={favoriteProducts}
      emptyListImg={require('../assets/folder.png')}
      renderItem={({ item }) => <FavoriteProductItem prodId={item as string} />}
    />
  );
};
