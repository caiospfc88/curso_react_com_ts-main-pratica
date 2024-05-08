import "./App.css";

import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import TaskDetails from "./components/TaskDetails";
import Route404 from "./components/Route404";

function App() {
  return (
    <>
      {/*1 - Setup e configuração inicial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          {/*2 - NavLink */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          {/*5 - rotas aninhadas */}
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
        {/*4 - rotas dinamicas */}
        <div>
          <h2>Tarefas</h2>
          <Link to={"/tasks/1"}>Tarefa 1</Link>
          <Link to={"/tasks/2"}>Tarefa 2</Link>
          <Link to={"/tasks/3"}>Tarefa 3</Link>
        </div>
        {/*6 - rota 404 */}
        <div>
          <h2>Itens</h2>
          <Link to={"/items/1"}>Item 1</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*3 - useNavigate */}
        <Route path="/login" element={<Login />} />
        {/*4 - Rotas dinamicas */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/*5 - rotas aninhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/*6 - rota 404 */}
        <Route path="*" element={<Route404 />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;
