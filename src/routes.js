import Main from "./pages/Main";
import Options from "./pages/Options";
import Lost from "./pages/Lost";

const routes = [
  {path: '/', content: <Lost />},
  {path: '/main', content: <Main />},
  {path: '/options', content: <Options />}
];

export default routes;