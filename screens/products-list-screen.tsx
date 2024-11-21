import { View, Text } from 'react-native';
import { useFetchProducts } from '../hooks/use-fetch-products';
import { textVariants } from '../constants/styles';
import { ProductsList } from '../components/products-list';
import { constStyles } from '../constants/styles';
import { CardListPlaceHolder } from '../components/card-list-placeholder';

export const ProductsListScreen = () => {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) return <CardListPlaceHolder />;
  if (error)
    return (
      <View style={constStyles.centralized}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: textVariants.h3,
            fontWeight: 'bold',
          }}
        >
          {error}
        </Text>
      </View>
    );
  return <ProductsList products={products} />;
};
