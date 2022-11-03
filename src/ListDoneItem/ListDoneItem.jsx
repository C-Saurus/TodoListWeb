import React, { useState } from 'react'
import axiosinstance from '../api/axiosinstance';
import './ListDoneItem.css'

const TodoItem = (props) => {
    const {listTd, setListTd} = props;
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState("");


    const handleDelete = (key) => {
      const url = `/userResource/${key}`;
      axiosinstance.delete(url).then(res => console.log("Deleted", res)).catch(err => console.log(err))
      setListTd(prev => {
        const newValue = prev.filter(item => item.id !== key)
        return newValue
      })
      alert("Xóa mục này?")
      
    }

    const handleUpdate = (key) => {
      if (newName === "") alert("Mục trống!");
      else {
        const url = `/userResource/${key}`;
        axiosinstance.put(url, {
            name: newName
        }).then(res => console.log("Changed", res)).catch(err => console.log(err))
        setListTd(prev => {
          const updateName = prev.map(item => (
            item.id === key ? {...item, name: newName} : item)
          )
          return updateName;
        }) 
        setEdit(false)
        setNewName("")
      }
    }
    
    return (
      <div className='base'>
        <ul className='listItem'>
          <li className='nav'>
            <div className='todoList'>
              <div className="todoItemId">ID</div>
              <div className="todoItemName">Tên công việc</div>
              <div className="todoItemCb">Sửa</div>
              <div className="todoItemCb">Xóa</div>
            </div>
          </li>
          {
            listTd.map((item, index) => {
              return (
              <div key={item.id}>
                <li className='item'>
                  <div className="todoItemId">{index+1}</div>
                  {edit === item.id ? (
                    <input type='text' className='rename' value={newName} onChange={e => setNewName(e.target.value)}></input>
                  ) : (
                    <div className="todoItemName">{item.name}</div>
                  )}
                  <button className="todoItemDel" onClick={() => handleDelete(item.id)}>Xóa</button>
                  {edit === item.id ? (
                    <button className='todoItemRename' onClick={() => handleUpdate(item.id)}>Lưu</button>
                  ) : (
                    <button className="todoItemRename" onClick={() => setEdit(item.id)}>Sửa</button>
                  )}
                </li>
              </div>)
            })
          }
        </ul>
      </div>
    )
  }

export default TodoItem