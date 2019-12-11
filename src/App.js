import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home';
import {Products} from './components/products';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './components/Navigation'
import Jumbotron from 'react-bootstrap/Jumbotron'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation></Navigation>
      <div className="container">
      <Jumbotron> <h5>Spring Boot React Rest API</h5></Jumbotron>
      

      <h3 className='m-3 d-flex justify-content-center'>Product Dashboard</h3>
     
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/products' component={Products} exact />
      </Switch>
 

    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
