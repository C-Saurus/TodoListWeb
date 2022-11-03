import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ListDone from './pages/ListDone'
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo'
function App() {

  return (
    <div className="App">
      <header>
        <div className='title-name'>🙉🙉 Hoàn thành công việc trong ngày nào 🙉🙉</div>
      </header>
      <nav className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/listdone'>ListDone</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/listdone' element={<ListDone />} ></Route>
        <Route path='/add' element={<AddTodo />} ></Route>
        <Route path='/edit' element={<EditTodo />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
