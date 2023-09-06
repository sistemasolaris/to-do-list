import './index.css';
import { useState } from 'react';

function AddTodoItem({ addItem }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addItem(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl w-full my-6">
      <label htmlFor="item" className="text-xl font-bold m-1">New Item</label>
      <div className="flex gap-2">
        <input type="text" id="item" placeholder="Do the laundry" value={newItem} onChange={e => setNewItem(e.target.value)} className="shadow border rounded w-full p-1 bg-slate-200"/>
        <button className="bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">Add</button>
      </div>
    </form>
  );
}

export default AddTodoItem;