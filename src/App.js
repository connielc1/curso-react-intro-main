import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <ListItem />
      </TodoList>

      <CreateTodoButton />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

function TodoCounter() {
  return (
    <h1>
      Has completado 3 de 5 TODOs
    </h1>
  );
}
function ListItem() {
  return (
    <li>
      <span>V</span>
      <p>Desayunar</p>
      <span>X</span>
      <p>Cursito</p>
    </li>
  );
}

export default App;
