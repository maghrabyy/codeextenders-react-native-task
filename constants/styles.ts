import { resFont } from './dimensions';
import { StyleSheet } from 'react-native';

export const textVariants = {
  h1: resFont(3.6),
  h2: resFont(3),
  h3: resFont(2.8),
  h4: resFont(2.6),
  h5: resFont(2.3),
  h6: resFont(1.8),
};

export const constStyles = StyleSheet.create({
  centralized: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
