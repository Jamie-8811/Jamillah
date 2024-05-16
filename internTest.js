import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem } from '@material-ui/core';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setData([...data, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          label="Enter Item"
        />
        <Button onClick={handleAddItem} variant="contained" color="primary">
          Add Item
        </Button>
      </div>
      <div>
        <Select value={selectedItem} onChange={handleSelectChange}>
          {data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Button
          onClick={() => handleDeleteItem(data.indexOf(selectedItem))}
          variant="contained"
          color="secondary"
        >
          Delete Item
        </Button>
      </div>
      {/* Your Snake Game Component Goes Here */}
    </div>
  );
}

export default App;


/* Explanation
a. This application use useState and useEffect hooks to manage state and perform side effects respectively.
b. Material-UI components such as TextField, Button, and Select are used for building the UI.
c. The data state manages the list of items stored in the application, and initialized with the data fetched from local storage.
d. Users can add items to the list using the TextField and Button components, and the newly added item will be stored in the local storage.
e. Users can select items from the list using the Select component, and they can delete the selected item from the list using the Delete Item button.*/
