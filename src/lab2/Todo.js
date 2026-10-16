import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
  // Pamti ono što korisnik trenutno piše.
  const [text, setText] = useState(''); 
  const [filter, setFilter] = useState('all');

  // Pamti listu zadataka.
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  // Dodaje novi zadatak.
  function addTodo() {
    const title = text.trim();

    if (title === '') {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      title: title,
      done: false,
    };

    setTodos((previous) => [...previous, newTodo]);
    setText('');
  }

  // Briše zadatak s primljenim ID-em.
  function removeTodo(id) {
    setTodos((previous) =>
      previous.filter((todo) => todo.id !== id)
    );
  }

  // Prebacuje zadatak između završenog i nezavršenog.
  function toggleTodo(id) {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  // Broji samo nezavršene zadatke.
  const remaining = todos.filter((todo) => !todo.done).length;

  const visibleTodos = todos.filter((todo) => {
  if (filter === 'active') return !todo.done;
  if (filter === 'done') return todo.done;
  return true;
});

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{remaining} left</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={styles.input}
      />

      <Pressable onPress={addTodo} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

      <View style={styles.row}>
        {['all', 'active', 'done'].map((value) => (
          <Pressable
            key={value}
            onPress={() => setFilter(value)}
            style={[
              styles.button,
              filter === value && { backgroundColor: '#237A45' },
        ]}
    >
      <Text style={styles.buttonText}>
        {value === 'all' ? 'All' : value === 'active' ? 'Active' : 'Done'}
      </Text>
    </Pressable>
  ))}
</View>

      {todos.length === 0 && <Text>No tasks yet</Text>}

      {visibleTodos.map((todo) => (
        <View key={todo.id} style={[styles.card, styles.row]}>
          <Pressable
            onPress={() => toggleTodo(todo.id)}
            style={{ flex: 1 }}
          >
            <Text
              style={{
                textDecorationLine: todo.done
                  ? 'line-through'
                  : 'none',
              }}
            >
              {todo.title}
            </Text>
          </Pressable>

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