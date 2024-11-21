import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { textVariants } from '../constants/styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/stack-navigation';
import { resFont, resH, resW } from '../constants/dimensions';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import {
  addProductToFavorite,
  removeProductFromFavorite,
} from '../store/favorite-products-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../constants/colors';

export const ProductDetailScreen = () => {
  const favoriteProducts = useSelector(
    (state: RootState) => state.favoriteProductsReducer
  );
  const route = useRoute<RouteProp<RootStackParamList>>();
  const product = route.params?.product;
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product?.image }}
        width={resW(95)}
        height={resH(40)}
        resizeMode="cover"
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{product?.title}</Text>
        <Text>{product?.description}</Text>
        <Text style={styles.price}>EGP {product?.price}</Text>
        {favoriteProducts.includes(product!.id) ? (
          <Button
            style={styles.button}
            mode="contained"
            icon={() => <Icon name="trash" color="white" />}
            onPress={() => {
              dispatch(removeProductFromFavorite(product!.id));
            }}
          >
            Remove From Favorites
          </Button>
        ) : (
          <Button
            style={styles.button}
            icon={() => <Icon name="heart" color="white" />}
            mode="contained"
            onPress={() => {
              dispatch(addProductToFavorite(product!.id));
            }}
          >
            Add To Favorites
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: { borderRadius: 12 },
  container: {
    paddingHorizontal: resW(2.5),
    paddingVertical: resH(1.2),
    alignItems: 'center',
  },
  title: { fontSize: textVariants.h2 },
  price: { fontSize: resFont(8), fontWeight: 'bold' },
  button: {
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
});
