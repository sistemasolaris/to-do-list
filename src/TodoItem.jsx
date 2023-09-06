import './index.css';

function TodoItem({ id, completed, text }) {
  return (
    <li key={id} className="flex gap-2 items-center">
      <input type="checkbox" checked={completed} />
      <label>{text}</label>
      <button className="bg-transparent hover:bg-red-500 text-red-700 text-base font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">Delete</button>
    </li>
  );
}

export default TodoItem