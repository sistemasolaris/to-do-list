import './index.css';
import AddTodoItem from './AddTodoItem.jsx';
import TodoItem from './TodoItem.jsx';

function TodoList() {
  return (
    <>
      <h1 className="text-4xl font-bold">Todo List</h1>
      <form className="max-w-5xl w-full my-6">
        <AddTodoItem />
      </form>
      <ul className="flex flex-col gap-2 max-w-4xl w-full text-xl">
        <TodoItem id="0" completed={true} text="Item 1" />
        <TodoItem id="1" completed={false} text="Item 2" />
      </ul>
    </>
  );
}

export default TodoList;