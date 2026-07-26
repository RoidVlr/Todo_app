import { useSelector, useDispatch } from "react-redux";
import {setLightTheme, setDarkTheme} from "../store";
import {useEffect, useState} from "react";
import { Switch } from "antd";

const ThemeSwitch = () => {

  const theme = useSelector(state => state.theme.value);
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      setActive(true);
    } else if (theme === 'light') {
      setActive(false);
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === 'dark') {
      dispatch(setLightTheme());
    } else if (theme === 'light') {
      dispatch(setDarkTheme());
    }
  }

  return <>
    <Switch
      className="theme-switch"
      value={active}
      onChange={changeTheme}
    />
    <p className="theme-option">Темная тема</p>
  </>
}

export default ThemeSwitch;