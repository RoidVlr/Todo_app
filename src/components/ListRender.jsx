import { List, Space, Checkbox } from "antd";
import Remover from "./Remover";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ListRender = ({list, setList}) => {

  const theme = useSelector(state => state.theme.value);
  const [color, setColor] = useState('#f2f2f2');

  const check = item => {
    setList(list.map(elem => {
      if ((elem.id === item.id) && (item.completed === false)) {
        return {id: elem.id, title: elem.title, completed: true};
      } else if ((elem.id === item.id) && (item.completed === true)) {
        return {id: elem.id, title: elem.title, completed: false};
      } else {
        return elem;
      }
    }));
  }
  
  useEffect(() => {
    if (theme === 'dark') setColor('#f2f2f2');
    else setColor('rgb(20, 20, 20)');
  }, [theme]);

  
  if (list.length === 0) {
    return <p className="empty-list" style={{color}}>Задач нет</p>
  } else {
    return <List
      className="list"
      size="small"
      bordered
      dataSource={list}
      renderItem={item =>
        <List.Item className="item" key={item.id}>
          <Space.Compact style={{alignItems: 'flex-start'}}>
            <Checkbox onChange={() => check(item)} value={item.completed}></Checkbox>
            <s
              style={
                item.completed
                ? {opacity: .6}
                : {textDecoration: 'none'}
              }
            >{item.title}</s>
          </Space.Compact>
          <Remover item={item} list={list} setList={setList} />
        </List.Item>
      }
    />
  }
}

export default ListRender;