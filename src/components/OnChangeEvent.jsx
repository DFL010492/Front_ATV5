import React, { useState } from 'react';

const OnChangeEvent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Digite algo..." />
            <p>Você digitou: {inputValue}</p>
        </div>
    );
};

export default OnChangeEvent;
