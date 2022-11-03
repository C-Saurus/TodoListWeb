import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/action';
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import { Form, Button, FormGroup, Label, Input} from 'reactstrap'
import {useLocation} from 'react-router-dom';
import './AddTodo.css'
const EditTodo = () => {
  const location = useLocation()
  const {from} = location.state
  const navigative = useNavigate();
  const [newName, setNewName] = useState(from.name)
  const [newLevel, setNewLevel] = useState(from.level)
  const [newTime, setNewTime] = useState(from.time)
  const dispatch = useDispatch()
  console.log(from)

  const handleEdit = () => {
    const newTodo = {
      id: Date.now(),
      name: newName,
      level: newLevel,
      time: new Date(newTime).getTime(),
      isDone: false
    }
    console.log(newTodo)
    dispatch(editTodo(newTodo, from.id));
    navigative("/");
  }
  const handleCancel = () => {
    navigative("/");
  }

  return (
    <div className='form-container'>
      <Form className='form'>
      <FormGroup className='form-base'>
        <Label className='form-label' for='nameId'>Tên công việc</Label>
        <Input className='form-input' name='name' id='nameId' placeholder='Nhập công việc...' autoFocus required value={newName} onChange={(e) => setNewName(e.target.value)}/>
      </FormGroup>
      <FormGroup className='form-base'>
        <Label className='form-label' for='levelId'>Chọn mức độ</Label>
        <Select
          className='form-select'
          id='levelId'
          placeholder='Chọn mức độ'
          value={newLevel}
          onChange = {(e) => setNewLevel(e)}
          options={
            [
              {value: 1, label:'Quan trọng và Gấp'},
              {value: 2, label:'Quan trọng nhưng Không gấp'},
              {value: 3, label:'Không quan trọng nhưng Gấp'},
              {value: 4, label:'Không quan trọng và Không gấp'}
            ]
          }
        />
      </FormGroup>
      <FormGroup className='form-base'>
        <Label className='form-label' for='timeId'>Deadline</Label>
        <Input className='form-input' id='timeId' type='datetime-local' onChange={(e) => setNewTime(e.target.value)}/>
      </FormGroup>
      <FormGroup className='form-base-btn'>
        <Button className='add-btn' onClick={handleEdit}>Save</Button>
        <Button className='cancel-btn' onClick={handleCancel}>Cancel</Button>
      </FormGroup>

    </Form>
    </div>
  );
};


export default EditTodo