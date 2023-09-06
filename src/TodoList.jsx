import './index.css';
import AddTodoItem from './AddTodoItem.jsx';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems(currentItems => {
      return [
        ...currentItems,
        { id: crypto.randomUUID, completed: false, text: text }
      ];
    });
  }

  function toggleCompletion(id, completed) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }

        return item;
      })
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Todo List</h1>
      <AddTodoItem addItem={addItem} />
      <ul className="flex flex-col gap-2 max-w-4xl w-full text-xl">
        {items.map((item) => {
          return <TodoItem key={item.id} id={item.id} completed={item.completed} text={item.text} toggleCompletion={toggleCompletion} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;