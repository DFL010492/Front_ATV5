import React, { useState } from 'react';

export const TextoFocusBlurExample = () => {
  // Estado para controlar se o input está focado
  const [isFocused, setIsFocused] = useState(false);

  // Estado para armazenar o valor do texto
  const [textoValue, setTextoValue] = useState('');

  // Função chamada quando o input recebe o foco
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Função chamada quando o input perde o foco
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Função chamada quando o valor do input muda
  const handleChange = (e) => {
    setTextoValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Exemplo de React com onFocus e onBlur</h2>
      <input
        type="text"
        value={textoValue}
        onFocus={handleFocus} // Define o estado para focado quando o input recebe foco
        onBlur={handleBlur}   // Define o estado para não focado quando o input perde o foco
        onChange={handleChange} // Atualiza o valor do texto quando o usuário digita
        placeholder="Clique ou tab para focar" // Texto exibido quando o campo está vazio
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray', // Altera a borda do input com base no foco
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>O campo de texto está focado!</p> : <p>O campo de texto não está focado.</p>}
      </div>
      <p>Valor do texto: {textoValue}</p>
    </div>
  );
};

export default TextoFocusBlurExample;
