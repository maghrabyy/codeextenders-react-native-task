import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductType } from '../types/product-type';
import { Card } from 'react-native-paper';
import { textVariants } from '../constants/styles';
import { resW } from '../constants/dimensions';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/stack-navigation';

type ProductItemProps = {
  product: ProductType;
};
export const ProductItem = ({ product }: ProductItemProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate('productDetails', { product });
      }}
    >
      <Card style={{ width: resW(45) }}>
        <Card.Cover source={{ uri: product.image }} />
        <Card.Title
          titleNumberOfLines={2}
          title={product.title}
          titleStyle={styles.title}
        />
        <Card.Content>
          <Text style={styles.price}>EGP {product.price}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: textVariants.h6 },
  price: { fontWeight: 'bold', fontSize: textVariants.h3 },
});
