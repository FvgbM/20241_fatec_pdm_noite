import React from "react";
import { ReactDOM } from "react";

// Criacao de Funcao no Js
// function f() {}
// const f = () => {}

//escrever uma funcao que define um componente react que devolve o nome da disciplina
//escrever uma funcao que define um componente react que devolve o seu nome completo
// Ajustar a funcao App para que 
// A div tem um p
// O p mostra : Me chamo tal e estou cursao tal
 

const App = () => {
   return (
    // expressao JSX (Javascript Extension)
    <div>Meu primeiro Componente React</div>

   );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
