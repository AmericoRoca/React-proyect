import logo from './logo.svg';
import './App.css';
import ToDoApp from './components/ToDoApp';
import './css/ToDoApp.css'



function App() {
  return (
    <div className="container">
      <h1 className='tituloLista'>Lista</h1>
        <ToDoApp/>
    </div>
  );
}

export default App;
