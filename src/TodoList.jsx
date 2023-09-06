import './index.css';
import AddTodoItem from './AddTodoItem.jsx';

function TodoList() {
  return (
    <>
      <h1 className="text-4xl font-bold">Todo List</h1>
      <form className="max-w-5xl w-full p-4">
        <AddTodoItem />
      </form>
    </>
  );
}

export default TodoList;