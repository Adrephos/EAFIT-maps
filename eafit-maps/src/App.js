import React from 'react';
import Route from 'react-router-dom/Route'
import './App.css';
import Search from './pages/search page/search';
import Map from './pages/search page/search';
import User from './pages/search page/search';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <header>
          <div className="header">
          <img src="imagenes/Logo azul.jpg" class="Header-img" align="middle" width="50%"></img>
          </div>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Search} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/user" component={User} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
