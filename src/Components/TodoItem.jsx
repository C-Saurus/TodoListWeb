import React, { useState } from 'react'
import './todoItem.css'
const TodoItem = (props) => {
    const {value, setValue, work, setWork} = props;
    const [check, setCheck] = useState(value.filter(item => item.isDone === true))
    let [count, setCount] = useState(6)
    console.log(value)
    const handleAdd = () => {
      setValue(prev => {
        const newWork = {id: count, name: work, isDone: false}
        const newValue = [...prev, newWork]
        localStorage.setItem('work', JSON.stringify(newValue))
        return newValue
      })
      setWork('')
      setCount(count+=1)
    }

    const handleDelete = (key) => {
      setValue(prev => {
        const newValue = prev.filter(item => item.id !== key)
        localStorage.setItem('work', JSON.stringify(newValue))
        return newValue
      })

      setCheck(prev => {
        const isCheck = check.includes(key)
        if (isCheck) return prev.filter(item => item !== key)
        else return prev
      })

      alert("Xóa mục này?")
    }

    const handleCheck = (key, index) => {
      setValue(prev => {
        prev[index].isDone = !prev[index].isDone
        localStorage.setItem('work', JSON.stringify(prev))
        return prev
      })
      setCheck(prev => {
        const isCheck = check.includes(key)
        if (isCheck) return prev.filter(item => item !== key)
        else return [...prev, key]
      })
    }

    
    return (
      <div className='base'>
        <ul className='listItem'>
          <li>
            <div className='todoList'>
              <div className="todoItem">ID</div>
              <div className="todoItem">Trạng thái</div>
              <div className="todoItem">Tên công việc</div>
              <div className="todoItem">Hoàn thành</div>
              <div className="todoItem">Xóa công việc</div>
            </div>
          </li>
          {
            value.map((item, index) => {
              return (
              <div key={item.id}>
                <li className='item'>
                  <div className="todoItem">{index+1}</div>
                  <div className="todoItem">{item.isDone ? "Đã hoàn thành" : "Chưa hoàn thành"}</div>
                  <div className="todoItem">{item.name}</div>
                  <input type='checkbox' className="todoItem" checked={item.isDone} onChange={() => handleCheck(item.id, index)}></input>
                  <button className="todoItemDel" onClick={() => handleDelete(item.id)}>Xóa</button>
                </li>
              </div>)
            })
          }
        </ul>
        <div className='inputBase'>
          <label htmlFor='inputName' className='label'>Nhập công việc mới</label>
          <input type='text' className='input' name='inputName' id='inputName' value={work} onChange={e => setWork(e.target.value)}></input>
          <button className='add' onClick={handleAdd}>Thêm</button>
        </div>
      </div>
    )
  }

export default TodoItem