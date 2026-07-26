import { ConfigProvider, theme } from 'antd';
import { useSelector } from 'react-redux'; 
import { useEffect } from "react";
import App from './App';

const Root = () => {

  const themeSet = useSelector(state => state.theme.value);

  useEffect(() => {
    const body = document.querySelector('body');
    if (themeSet === 'dark') {
      body.style.backgroundColor = 'rgb(20, 20, 20)';
    } else if (themeSet === 'light') {
      body.style.backgroundColor = '#f2f2f2';
    }
  }, [themeSet]);

  const configProps = { theme: { algorithm: themeSet === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm} };
  
  return <ConfigProvider {...configProps}>
    <App />
  </ConfigProvider>
};

export default Root;