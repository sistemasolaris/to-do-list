import './index.css';

function AddTodoItem() {
  return (
    <>
      <label htmlFor="item" className="text-xl font-bold m-1">New Item</label>
      <div className="flex gap-2">
        <input type="text" id="item" className="shadow border rounded w-full p-1 bg-slate-200" placeholder="Do the laundry"/>
        <button className="bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">Add</button>
      </div>
    </>
  );
}

export default AddTodoItem;