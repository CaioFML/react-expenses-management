import './App.css';
import Todos from './components/Todos';

const TODOS = [
  { id: 't1', text: 'Finish the course' },
  { id: 't2', text: 'Learn all about the Course Main Topic' },
  { id: 't3', text: 'Help other students in the course Q&A' }
];

function App() {
  return (
    <div>
      <Todos items={TODOS} />
    </div>
  );
}

export default App;
