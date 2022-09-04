import React, { useState } from 'react'
import axiosinstance from '../api/axiosinstance';
import './todoItem.css'

const TodoItem = (props) => {
    const {listTd, setListTd, work, setWork} = props;
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState("");

    const handleAdd = () => {
      if (work === "") alert("Mục trống!");
      else {
        const url = "/userResource";
        const newId = Date.now();
        const newItem = {id: newId, name: work, isDone: false};
        axiosinstance.post(url, newItem).then(res => console.log("Added", res)).catch(err => console.log(err))
        setListTd(prev => {
          return [...prev, newItem];
        })
        setWork('')
      }
    }

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



    const handleCheck = (key) => {
      const url = `/userResource/${key}`;
      const newValue = listTd.filter(item => item.id === key)
        console.log(newValue[0].isDone)
        axiosinstance.put(url, {
          name: newValue[0].name,
          isDone: !newValue[0].isDone,
          id: newValue[0].id
        }).then(res => console.log("Changed", res)).catch(err => console.log(err))
      setListTd(prev => {
        const newPrev = prev.map(item => 
          item.id === key ? { ...item, isDone: !item.isDone } : item
        )
        return newPrev
      })
    }
        

    
    return (
      <div className='base'>
        <ul className='listItem'>
          <li className='nav'>
            <div className='todoList'>
              <div className="todoItemId">ID</div>
              <div className="todoItem">Trạng thái</div>
              <div className="todoItemName">Tên công việc</div>
              <div className="todoItemCb">Xong</div>
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
                  <div className="todoItem">{item.isDone ? "Đã hoàn thành" : "Chưa hoàn thành"}</div>
                  {edit === item.id ? (
                    <input type='text' className='rename' value={newName} onChange={e => setNewName(e.target.value)}></input>
                  ) : (
                    <div className="todoItemName">{item.name}</div>
                  )}
                  
                  
                  <input type='checkbox' className="todoItemCb" checked={item.isDone} onChange={() => handleCheck(item.id)}></input>
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
        <div className='inputBase'>
          <label htmlFor='inputName' className='label'>Nhập công việc mới</label>
          <input type='text' className='input' name='inputName' id='inputName' value={work} placeholder='Thêm công việc cần làm' onChange={e => setWork(e.target.value)}></input>
          <button className='add' onClick={handleAdd}>Thêm</button>
          
        </div>
      </div>
    )
  }

export default TodoItem