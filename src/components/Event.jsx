import React from 'react'

const Event = () => {
    // Função chamada ao clicar no segundo botão
    const handleClick = (e) => {
        console.log(e);
        alert("Evento com função!")
    }

    // Função chamada ao clicar no terceiro botão
    const callNames = () => {alert("Testando")}
    
  return (
    <div>
      {/* Botão que exibe um alerta com uma mensagem específica */}
      <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
        Clique Aqui
      </button>
   
      {/* Botão que chama handleClick ao ser clicado */}
      <div><button onClick = {handleClick}> Clique com Função</button></div>
      
      {/* Botão que chama callNames ao ser clicado */}
      <div><button onClick = {callNames}> Clique com Função</button></div>
    </div>
  )
}

export default Event
