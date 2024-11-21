import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ListRenderItem,
} from 'react-native';
import { ProductItem } from './product-item';
import { resH, resW } from '../constants/dimensions';
import { ProductType } from '../types/product-type';
import { constStyles, textVariants } from '../constants/styles';

type ProductsListProps = {
  products: ProductType[] | string[];
  emptyListImg?: ImageSourcePropType;
  renderItem?: ListRenderItem<ProductType | string>;
};
export const ProductsList = ({
  products,
  emptyListImg = require('../assets/box.png'),
  renderItem = ({ item }) => <ProductItem product={item as ProductType} />,
}: ProductsListProps) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={{ gap: resW(2) }}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      data={products}
      ListEmptyComponent={() => (
        <View style={constStyles.centralized}>
          <Image
            source={emptyListImg}
            style={{ width: resW(65), height: resH(30) }}
          />
          <Text style={styles.emptyListText}>No Products Here.</Text>
        </View>
      )}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: resW(4),
    paddingVertical: 8,
  },
  emptyListText: { fontSize: textVariants.h1, textAlign: 'center' },
});
