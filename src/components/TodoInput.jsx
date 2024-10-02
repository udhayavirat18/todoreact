import { useState } from "react";

export default function TodoInput(props) {
    const { handleAdd, itemValue, setItemValue } = props;

    const handleSubmit = () => {
        if (itemValue.trim() !== '') {
            handleAdd(itemValue);
            setItemValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <header>
            <input 
                value={itemValue} 
                onChange={(e) => setItemValue(e.target.value)} 
                onKeyDown={handleKeyDown}
                placeholder="Enter Todo.."
            />
            <button onClick={handleSubmit}>Add Todo</button>
        </header>
    );
}
