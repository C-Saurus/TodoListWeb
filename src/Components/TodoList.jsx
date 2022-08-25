import React from 'react';
import TodoItem from './TodoItem';
const TodoList = (props) => {
  const {value, setValue, work, setWork} = props;
  
  return (
    <div>
       <TodoItem value={value} setValue={setValue} work={work} setWork={setWork}/>
    </div>
  )
}

export default TodoList