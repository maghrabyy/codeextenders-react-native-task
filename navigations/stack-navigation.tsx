import { createStackNavigator } from '@react-navigation/stack';
import { ProductsListScreen } from '../screens/products-list-screen';
import { ProductDetailScreen } from '../screens/product-detail-screen';
import { AppRoutes } from '../routes';
import { ProductType } from '../types/product-type';

export type RootStackParamList = {
  productsList: undefined;
  productDetails: { product: ProductType };
};

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Code Extenders Task',
        headerStyle: { backgroundColor: 'transparent' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name={AppRoutes.productsList}
        component={ProductsListScreen}
      />
      <Stack.Screen
        name={AppRoutes.productDetails}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}
