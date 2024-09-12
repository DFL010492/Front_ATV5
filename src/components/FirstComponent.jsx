import React from 'react'

const FirstComponent = () => {
    const nome = 'Daniel'
    const sobrenome = 'Ferreira Lima'
    const matricula = 12352;
    const professor = 'Felipe Batista da Silva'
    const aula = 'Construção de Frontend'

  return (
    <div>

        <h1>Bom dia {nome} {sobrenome}, sua matricula é {matricula}
            <br></br>
            <br></br>
            Hoje teremos aula de {aula} com o professor {professor}
        </h1>

    </div>
  )
}

export default FirstComponent
