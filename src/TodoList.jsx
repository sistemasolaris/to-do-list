import './index.css';
import AddTodoItem from './AddTodoItem.jsx';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks(currentTasks => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID, completed: false, text: text }
      ];
    });
  }

  function toggleCompletion(id, completed) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }

        return task;
      })
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Todo List</h1>
      <AddTodoItem addTask={addTask} />
      <ul className="flex flex-col gap-2 max-w-4xl w-full text-xl">
        {tasks.map((item) => {
          return <TodoItem key={item.id} id={item.id} completed={item.completed} text={item.text} toggleCompletion={toggleCompletion} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;