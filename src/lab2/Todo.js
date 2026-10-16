import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import AddTodo from './AddTodo';
import FilterBar from './FilterBar';
import TodoItem from './TodoItem';
import { styles } from './styles';

export default function Todo() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  function addTodo(title) {
    const newTodo = {
      id: Date.now().toString(),
      title,
      done: false,
    };
    setTodos((previous) => [...previous, newTodo]);
  }

  function removeTodo(id) {
    setTodos((previous) =>
      previous.filter((todo) => todo.id !== id)
    );
  }

  function toggleTodo(id) {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const remaining = todos.filter((todo) => !todo.done).length;
  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={[
        styles.screen,
        { flex: 0, flexGrow: 1 },
      ]}
    >
      <Text style={styles.title}>{remaining} left</Text>

      <AddTodo onAdd={addTodo} />
      <FilterBar filter={filter} onChange={setFilter} />

      {todos.length === 0 && <Text>No tasks yet</Text>}

      {visibleTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </ScrollView>
  );
}