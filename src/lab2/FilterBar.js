import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' },
];

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={styles.row}>
      {options.map((option) => (
        <Pressable
          key={option.value}
          onPress={() => onChange(option.value)}
          style={[
            styles.button,
            filter === option.value && {
              backgroundColor: '#237A45',
            },
          ]}
        >
          <Text style={styles.buttonText}>{option.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}