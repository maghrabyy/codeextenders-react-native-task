import { Card } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { resW } from '../constants/dimensions';
import { textVariants } from '../constants/styles';
import { useFetchProduct } from '../hooks/use-fetch-product';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { removeProductFromFavorite } from '../store/favorite-products-slice';
import { CardPlaceholder } from './card-placeholder';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type FavoriteProductItemProps = {
  prodId: string;
};
export const FavoriteProductItem = ({ prodId }: FavoriteProductItemProps) => {
  const dispatch = useDispatch();
  const { product, error, isLoading } = useFetchProduct(prodId);
  if (isLoading) return <CardPlaceholder />;
  if (error) return <Text>{error}</Text>;
  return (
    <Card style={{ width: resW(45) }}>
      <Card.Cover source={{ uri: product?.image }} />
      <Card.Title
        titleNumberOfLines={2}
        title={product?.title}
        titleStyle={styles.title}
      />
      <Card.Content>
        <Text style={styles.price}>EGP {product?.price}</Text>
        <Button
          textColor={colors.secondary}
          icon={() => <Icon name="trash" color={colors.secondary} />}
          onPress={() => {
            dispatch(removeProductFromFavorite(prodId));
          }}
        >
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: textVariants.h6 },
  price: { fontWeight: 'bold', fontSize: textVariants.h3 },
});
