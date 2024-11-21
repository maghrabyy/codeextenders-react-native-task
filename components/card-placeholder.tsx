import { Card } from 'react-native-paper';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { resW } from '../constants/dimensions';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const CardPlaceholder = () => {
  return (
    <Card style={{ width: resW(45) }}>
      <ShimmerPlaceholder
        shimmerStyle={{
          width: resW(45),
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          height: 230,
        }}
      />
      <Card.Content style={{ paddingTop: 8, gap: 4 }}>
        <ShimmerPlaceholder width={resW(37)} style={{ borderRadius: 12 }} />
        <ShimmerPlaceholder width={resW(37)} style={{ borderRadius: 12 }} />
      </Card.Content>
    </Card>
  );
};
