// src/components/OnKeyDownEvent.jsx
import React from 'react';

const OnKeyDownEvent = () => {
    const handleKeyDown = (e) => {
        alert(`Você pressionou a tecla: ${e.key}`);
    };

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Pressione uma tecla..." />
        </div>
    );
};

export default OnKeyDownEvent;
