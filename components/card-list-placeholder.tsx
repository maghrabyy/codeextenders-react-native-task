import { FlatList, View, StyleSheet } from 'react-native';
import { resW } from '../constants/dimensions';
import { CardPlaceholder } from './card-placeholder';

export const CardListPlaceHolder = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={{ gap: resW(2) }}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      data={Array.from(Array(6))}
      renderItem={() => <CardPlaceholder />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: resW(4),
    paddingVertical: 8,
  },
});
