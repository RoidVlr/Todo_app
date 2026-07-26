import { useState, useMemo, useEffect } from "react";
import Search from "../components/Search";
import TextInput from "../components/TextInput";
import ListRender from "../components/ListRender";
import { useSelector } from "react-redux";
import axios from "axios";

const Main = () => {

  const [list, setList] = useState([
    // {id: 5, title: 'Backrooms: две небольшие шайбы, массы которых m1 и m2, связаны нерастяжимой нитью длины l и движутся по гладкой горизонтальной плоскости. В некоторый момент скорость одной шайбы равна нулю, а другой — v, причем ее направление перпендикулярно к нити. Найти силу натяжения нити.В некоторый момент скорость одной шайбы равна нулю, а другой — v, причем ее направление перпендикулярно к нити. Найти силу натяжения нити.', completed: false},
    // {id: 4, title: 'Obsession', completed: false},
    // {id: 3, title: 'Interstellar', completed: false},
    // {id: 2, title: 'The amazing digital circus', completed: false},
    // {id: 1, title: 'Zhiza', completed: false}
  ]);

  const [search, setSearch] = useState('');
  
  const searchedList = useMemo(() => {
    return list.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, list]);


  // const newlist = useSelector(state => state.list.value);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get('/api.json')
  //     .then(res => setData(res.data))
  //     .catch(window.alert);
  // }, []);


  
  return <div className="main">
    <Search search={search} setSearch={setSearch} />
    {/* {data.map(item =>
      <p>dsdsf {item.id}. {item.title}</p>
    )} */}
    <TextInput list={list} setList={setList} />
    <ListRender list={searchedList} setList={setList} />
  </div>
}

export default Main;