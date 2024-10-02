import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState('');

  function persistData(newItems) {
    localStorage.setItem('items', JSON.stringify(newItems)); // Save just the array
  }

  function handleAdd(newItem) {
    const newItems = [...items, newItem];
    persistData(newItems);
    setItems(newItems);
  }

  function handleDelete(index) {
    const newItems = items.filter((_, i) => i !== index); // Remove item by filtering it out
    persistData(newItems);
    setItems(newItems);
  }

  function handleEdit(index) {
    const valueEdited = items[index];
    setItemValue(valueEdited);
    handleDelete(index);
  }

  useEffect(() => {
    const localItems = localStorage.getItem('items');
    if (localItems) {
      try {
        const parsedItems = JSON.parse(localItems);
        // Ensure parsedItems is an array
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems);
        } else {
          setItems([]); // Fallback to empty array if it's not an array
        }
      } catch (error) {
        console.error('Error parsing items from localStorage', error);
        setItems([]); // Fallback to empty array on error
      }
    }
  }, []);

  return (
    <>
      <TodoInput handleAdd={handleAdd} itemValue={itemValue} setItemValue={setItemValue} />
      <TodoList handleDelete={handleDelete} handleEdit={handleEdit} items={items} />
      <footer>
        <p>
          Check out the code on GitHub:{" "}
          <a href="https://github.com/udhayavirat18/todoreact" target="_blank" rel="noopener noreferrer">
            Todo App Repository
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
