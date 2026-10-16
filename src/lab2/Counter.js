import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Count: {count}</Text>

      <View style={styles.row}>
        <Pressable
          disabled={count === 0}
          onPress={() => setCount((c) => Math.max(0, c - 1))}
          style={[
            styles.button,
            count === 0 && { backgroundColor: '#9AA6B5' },
          ]}
        >
          <Text style={styles.buttonText}>−1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount((c) => c + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(0)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
        <Pressable
          onPress={() => setLiked((previous) => !previous)}
          style={[
          styles.button,
          liked && { backgroundColor: '#237A45' },
          ]}
        >
  <Text style={styles.buttonText}>
    {liked ? 'Liked' : 'Like'} ({liked ? 13 : 12})
  </Text>
</Pressable>
      </View>
    </View>
  );
}