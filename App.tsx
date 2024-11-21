import { NavigationContainer } from '@react-navigation/native';
import { ButtonTabsNavigation } from './navigations/bottom-tab-navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ButtonTabsNavigation />
      </NavigationContainer>
    </Provider>
  );
}
