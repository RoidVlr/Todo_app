import { Card } from 'antd';
import ThemeSwitch from '../components/ThemeSwitch';
import ReaskSwitch from '../components/ReaskSwitch';
import Recycle from "../components/Recycle";

const Options = () => {

    return <Card className="options">
      <ThemeSwitch />
      <br />
      <ReaskSwitch />
      <br />
      {/* <Recycle /> */}
  </Card>
}


export default Options;