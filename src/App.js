import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import history from './history';
import Homepage from './components/Homepage'; 

const App = () => {
  return (
      <>
      <BrowserRouter history={history}>
        <Route exact path='/' component={Navbar}/>
        <Route exact path='/homepage' component={Homepage}/>
      </BrowserRouter>
      </>
  )
}
export default App;

