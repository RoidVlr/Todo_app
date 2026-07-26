import { Input, Space, Button } from "antd";
import { useState } from "react";

const TextInput = ({list, setList}) => {

  const [title, setTitle] = useState('');
  const [display, setDisplay] = useState('none');
    
  const appendItem = () => {
    if (title === '') {
      setDisplay('block');
      setTimeout(() => {
        setDisplay('none');
      }, 4000);
      } else {
        setList([
          {
            id: list.length !== 0 ? (list.at(0).id + 1) : 1,
            title,
            completed: false
          },
          ...list
        ]);
      setTitle('');
      setDisplay('none');
    }
  }
  
  document.onkeyup = e => {
    if (e.code === 'Enter')
      appendItem()
  }

  return <div>
    <Space.Compact className="inputs">
      <Input
        className="todoInput"
        type="text"
        placeholder="Введите задачу"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button
        className="appender"
        type="primary"
        onClick={appendItem}
      >+</Button>
    </Space.Compact>
    <p
      className="empty-input-error"
      style={{display}}
    >Поле не введено.</p>
  </div>
}

export default TextInput;