import { useEffect, useState } from 'react';
import axiosinstance from './api/axiosinstance';
import './App.css';
import TodoList from './Components/TodoList';
function App() {
  const [work, setWork] = useState('');
  const [listTd, setListTd] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const url = "/userResource";
        const response = await axiosinstance.get(url);
        setListTd(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchList()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Daily Work</div>
        <TodoList listTd={listTd} setListTd={setListTd} work={work} setWork={setWork}/>
      </header>
    </div>
  );
}

export default App;
