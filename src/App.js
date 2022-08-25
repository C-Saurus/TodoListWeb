import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
function App() {
  const [work, setWork] = useState('')
  // const [value, setValue] = useState([
  //   {
  //     id: 0,
  //     name: "Learning",
  //     isDone: false
  //   },
  //   {
  //     id: 1,
  //     name: "Coding",
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     name: "Cooking",
  //     isDone: false
  //   },
  //   {
  //     id: 3,
  //     name: "Sleeping",
  //     isDone: false
  //   },
  //   {
  //     id: 4,
  //     name: "Eating",
  //     isDone: false
  //   }
  // ])
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('work')) || [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Daily Work</div>
        <TodoList value={value} setValue={setValue} work={work} setWork={setWork}/>
      </header>
    </div>
  );
}

export default App;
