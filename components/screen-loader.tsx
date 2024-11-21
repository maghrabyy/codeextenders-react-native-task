import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { constStyles } from '../constants/styles';

export const ScreenLoader = () => {
  return (
    <View style={constStyles.centralized}>
      <ActivityIndicator size="large" />
    </View>
  );
};
