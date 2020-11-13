import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import Home from './components/Home/Home'
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Listar Usuários</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header> 
        <main> 
          <Switch>
            <Route path="/" exact> 
              <Home />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="*"> 
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
//rotas possuem hieráquia, colocar / por ultimo, le primeiro. ou colocar valor para todas as rotas.
//exact serve para definir exatamente o nome da rota
function PaginaNaoEncontrada(){
  return <>
    <h1>404</h1>
    <p>Página Não encontrada</p> 
  </>
} //ou posso passar o conteudo direto pela rota

export default App;
