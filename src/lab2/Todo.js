import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
  const [text, setText] = useState('');

  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  function addTodo() {
    const title = text.trim();

    if (title === '') {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      title,
      done: false,
    };

    setTodos((previous) => [...previous, newTodo]);
    setText('');
  }

  function removeTodo(id) {
    setTodos((previous) =>
      previous.filter((todo) => todo.id !== id)
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{todos.length} tasks</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={styles.input}
      />

      <Pressable onPress={addTodo} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

      {todos.length === 0 && <Text>No tasks yet</Text>}

      {todos.map((todo) => (
        <View
          key={todo.id}
          style={[styles.card, styles.row]}
        >
          <Text style={{ flex: 1 }}>{todo.title}</Text>

          <Pressable
            onPress={() => removeTodo(todo.id)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}