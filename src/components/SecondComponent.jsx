import React from 'react'

const SecondComponent = () => {
    const filmes = [{
        Nome: 'Deadpool 3',
        Ano: 2024,
        Diretor: 'Shawn Levy'
    },
    {
        Nome: 'X-man',
        Ano: 2000,
        Diretor: 'Brett Ratner'
    },
    {
        Nome: 'Duna',
        Ano: 2021,
        Diretor: 'Denis Villeneuve'
    },
    {
        Nome: 'O Irlandês',
        Ano: 2019,
        Diretor: 'Martin Scorsese'
    },
    {
        Nome: 'Boy Kills World',
        Ano: 2023,
        Diretor: 'Moritz Mohr'
    }
    ];

    filmes.sort((a, b) => a.Nome.localeCompare(b.Nome));

    return (
        <div>
            <h2> Esse filmes é muito bons:
                <ol>
                    {filmes.map((filme, nome)=> (
                        <li key = {nome}>
                            {filme.Nome} - {filme.Ano} - {filme.Diretor}
                        </li>
                            )
                        )
                    }
                </ol>
            </h2>
        </div>
    )
}

export default SecondComponent