import { Switch } from "antd";
import { setReaskFalse, setReaskTrue } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ReaskSwitch = () => {
  
  const reask = useSelector(state => state.reask.value);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reask) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [reask]);

  const changeReask = () => {
    if (reask) {
      dispatch(setReaskFalse());
    } else {
      dispatch(setReaskTrue());
    }
  }

  return <>
    <Switch
      className="reask-switch"
      value={active}
      onChange={changeReask}
    />
    <p className="reask-option">Не переспрашивать об удалении задач</p>
  </>
}

export default ReaskSwitch;