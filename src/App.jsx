import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio'
import Noticias from './pages/Noticias/Noticias'
import Registro from './pages/Registro/Registro'
import Servicio from './pages/Servicios/Servicio'
import Equipo from './pages/Equipo/Equipo'
import Login from './pages/Login/Login'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/sec-noticias">
            <Noticias />
          </Route>
          <Route path="/sec-equipo">
            <Equipo />
          </Route>
          <Route path="/sec-registro">
            <Registro />
          </Route>
          <Route path="/sec-servicio">
            <Servicio />
          </Route>
          <Route path="/sec-login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
