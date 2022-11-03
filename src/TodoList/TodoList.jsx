import React from 'react'
import axiosinstance from '../api/axiosinstance';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, doneTodo } from '../store/action';
import {Link} from 'react-router-dom';
import Timer from '../Timer/Timer'
import './TodoList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = () => {
    const todoList = useSelector(state => state)
    const dispatch = useDispatch()

    const handleCheck = (key) => {
        dispatch(doneTodo(key))
    }

    const handleAddToGoodWork = (item) => {
        toast.success('🦄 Đã thêm thành công!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const url = "/userResource";
        const newItem = {id: item.id, name: item.name};
        axiosinstance.post(url, newItem).then(res => console.log("Added: ", res)).catch(err => console.log("Error: ", err))
    }

    const handleDelete = (key) => {
        dispatch(deleteTodo(key))
    }
    return (
        <div>
            <div className='todoList'>
                <div className='todoList-container'>
                {   todoList.todoList.length !== 0 ?
                    (<table className='table'>
                        <thead>
                            <tr className='table-head'>
                                <th>Stt</th>
                                <th>Tên công việc</th>
                                <th>Status</th>
                                <th>Mức độ</th>
                                <th>Xóa</th>
                                <th>Lưu</th>
                                <th>Sửa</th>
                                <th>Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.todoList.map((item, index) => {
                                return (
                                    <tr key={item.id} className='table-item'>
                                        <td>
                                            <span>{index+1}</span>
                                        </td>
                                        <td>
                                            <span>{item.name}</span>
                                        </td>
                                        <td>
                                            <input type='checkbox' style={{width: '1.5rem', height: '1.5rem'}} checked={item.isDone} onChange={() => handleCheck(item.id)}></input>
                                        </td>
                                        <td>
                                            <span>{item.level.label}</span>
                                        </td>
                                        <td>
                                            <button className="del-btn" onClick={() => handleDelete(item.id)}>Xóa</button>
                                        </td>
                                        <td>
                                            <button className="save-btn" onClick={() => handleAddToGoodWork(item)}>Lưu</button>
                                        </td>
                                        <td>
                                            <Link to='/edit' state={{ from: item }}>
                                                <button className='edit-btn'>Sửa</button>
                                            </Link>
                                        </td>
                                        <td className='done'>
                                            {item.isDone === false ? <Timer value={item.time}></Timer> : <div>Đã hoàn thành</div>}
                                        </td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>) : (<div style={{color: "red"}}>Chưa có công việc nào được thêm</div>)
                }
                </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
        
    )
}
export default TodoList
