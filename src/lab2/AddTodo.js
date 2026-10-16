import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAdd() {
    const title = text.trim();

    if (title === '') return;

    onAdd(title);
    setText('');
  }

  return (
    <View style={{ gap: 12 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={styles.input}
      />

      <Pressable onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}