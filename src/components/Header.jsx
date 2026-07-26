import { FormOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const router = useNavigate();

  return <div className="header">
    <FormOutlined className="icon" />
    <p className="title">Todo app</p>
    <Button
      className="nav-main"
      variant="text"
      type="text"
      onClick={() => router('/main')}
      style={{color: '#f2f2f2'}}
    >Главная</Button>
    <Button
      className="nav-options"
      variant="text"
      type="text"
      onClick={() => router('/options')}
      style={{color: '#f2f2f2'}}
    >Настройки</Button>
  </div>
}

export default Header;