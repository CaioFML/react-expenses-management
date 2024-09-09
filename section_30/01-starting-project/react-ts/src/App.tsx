import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';



function App() {
  const TODOS = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Redux')
  ];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
  }

  return (
    <div>
    <NewTodo onAddTodo={} />
      <Todos items={TODOS} />
    </div>
  );
}

export default App;
