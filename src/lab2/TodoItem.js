import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <View style={[styles.card, styles.row]}>
      <Pressable
        onPress={() => onToggle(todo.id)}
        style={{ flex: 1 }}
      >
        <Text
          style={{
            textDecorationLine: todo.done ? 'line-through' : 'none',
          }}
        >
          {todo.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onRemove(todo.id)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
}