import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {

  return <div className="app">
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(route =>
            <Route path={route.path} element={route.content} key={route.path} />
        )}
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;

// ВОССТАНОВЛЕНИЕ ИЗ МУСОРНОГО ВЕДРА, ТЕМАТИКИ (РАБОТА, ЛАЙФ, ЛИЧНОЕ И ТП),
// НАСТРОЙКИ (СОЗДАТЬ И ВОЙТИ В АККАУНТ), NEXT, КАЛЕНДАРЬ

// СДЕЛАНО:
// ПОЯВЛЕНИЕ ТУДУСА СВЕРХУ А НЕ СНИЗУ, ЭНТЕР КЛАВИША, ПОИСКОВИК,
// МЕМОИЗАЦИЯ, АНИМАЦИИ, МОДАЛКА, НАВИГАЦИЯ, ХЕДЕР, НАСТРОЙКИ С ПЕРЕСПРОСОМ
// УДАЛЕНИЯ ТУДУСА, РТК, ТЕМЫ