import { Link } from 'react-router-dom'
import {
  Container,
  Button
} from 'reactstrap'
import Select from 'react-select'
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortTodo, filterTodo } from '../store/action';
import './Home.scss';
function Home() {
    const [sort, setSort] = useState(0)
    const [filter, setFilter] = useState("")
    const dispatch = useDispatch()

    const handleSort = () => {
      dispatch(sortTodo(sort))
    }
    const handleFilter = () => {
      dispatch(filterTodo(filter))
    }
    
    return (
        <div className='home'>
              <Container className='home-container'>
                  <div className='home-container-item'>
                    <Link to='/add'>
                      <button className='add-btn'>Thêm công việc mới</button>
                    </Link>
                    <div className='home-container-item-select'>
                      <div className='select-base'>
                        <Select className='select'
                              id='sortId'
                              placeholder='Select sort type...'
                              
                              onChange = {(e) => setSort(e.value)}
                              options={
                                [
                                  {value: 1, label:'Theo tên a-z'},
                                  {value: 2, label:'Theo tên z-a'},
                                ]
                              }
                            />
                        <Button className='func-btn' onClick={() => handleSort()}>Sort</Button>
                      </div>
                      <div className='select-base'>
                        <Select className='select'
                              id='filetId'
                              placeholder='Select filter type...'
                              
                              onChange = {(e) => setFilter(e.value)}
                              options={
                                [
                                  {value: 1, label:'Tất cả'},
                                  {value: 1, label:'Quan trọng và Gấp'},
                                  {value: 2, label:'Quan trọng nhưng Không gấp'},
                                  {value: 3, label:'Không quan trọng nhưng Gấp'},
                                  {value: 4, label:'Không quan trọng và Không gấp'}
                                ]
                              }
                            />
                        <Button className='func-btn' onClick={() => handleFilter()}>Filter</Button>
                      </div>
                    </div>
                  </div>
              </Container>
            <Container className='home-navbar-container'>
              <TodoList></TodoList>
            </Container>
            
            
        </div>
    )
}

export default Home