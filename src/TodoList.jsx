import './index.css';
import AddTodoItem from './AddTodoItem.jsx';
import TodoItem from './TodoItem.jsx';
import { useEffect, useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const tasksState = localStorage.getItem("ITEMS");
    if (tasksState == null) return [];
    return JSON.parse(tasksState);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks])

  function addTask(text) {
    setTasks(currentTasks => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), completed: false, text: text }
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

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter(task => task.id !== id);
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Todo List</h1>
      <AddTodoItem addTask={addTask} />
      <ul className="flex flex-col gap-2 max-w-4xl w-full text-xl">
        {tasks.map((item) => {
          return <TodoItem key={item.id} id={item.id} completed={item.completed} text={item.text} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;