import React from 'react';
import Route from 'react-router-dom/Route'
import './App.css';
import Search from './pages/search page/search';
import Map from './pages/map page/map';
import User from './pages/search page/search';
import data from './pages/utils/data'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div className="header">
          <img src="imagenes/Logo azul.jpg" class="Header-img" align="middle" width="50%"/>
          </div>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Search} />
            <Route path="/map" component={Map} />
            <Route path="/map/:id" exact
                strict component={Map} />
            <Route exact path="/user" component={User} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
