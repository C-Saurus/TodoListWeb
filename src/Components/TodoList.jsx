import React from 'react';
import TodoItem from './TodoItem';
const TodoList = (props) => {
  const {listTd, setListTd, work, setWork} = props;
  
  return (
    <div>
       <TodoItem listTd={listTd} setListTd={setListTd} work={work} setWork={setWork}/>
    </div>
  )
}

export default TodoList