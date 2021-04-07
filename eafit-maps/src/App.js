import React from 'react';
import Route from 'react-router-dom/Route'
import logo from './logo.svg';
import './App.css';
import Search from './pages/search page/search';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <div>
            
            <Route exact path="/" component={Search} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
