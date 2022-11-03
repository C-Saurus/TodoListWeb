import { useEffect, useState } from 'react';
import axiosinstance from '../api/axiosinstance';
import ListDoneItem from '../ListDoneItem/ListDoneItem'
function ListDone() {
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
        <header className="App-header">
            <div className="title">Highlight Work</div>
            <ListDoneItem listTd={listTd} setListTd={setListTd}/>
        </header>
    )
}

export default ListDone