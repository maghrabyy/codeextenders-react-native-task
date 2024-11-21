import { colors } from '../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './stack-navigation';
import { FavoriteProductsScreen } from '../screens/favorite-products-screen';
import { AppRoutes } from '../routes';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function ButtonTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name={'home'}
        component={StackNavigation}
        options={{
          headerShown: false,
          title: 'Products',

          tabBarIcon: ({ focused }) => (
            <Icon
              name="th-list"
              color={focused ? colors.secondary : colors.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.favoriteProducts}
        component={FavoriteProductsScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false,
          title: 'Favorites',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="heart"
              color={focused ? colors.secondary : colors.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
