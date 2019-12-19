import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Home'
import InfoPage from './Info'
import NavigaionBar from './NavigationBar'


function App() {
  return (
    <div>
        <NavigaionBar/>
        <BrowserRouter basename={window.location.pathname || ''}>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/info' component={InfoPage}/>
          </Switch>
        </BrowserRouter>
        <div>
          <p className="HomeDisclaimer" >DISCLAIMER: The content of this web site is entirely the responsibility of a 
          campus organization which is independent from the University of Toronto. The opinions
           expressed do not necessarily reflect those of the University. The University of Toronto 
           shall not be liable for any damage resulting from the use or misuse of the contents of this
            web site.</p> </div>
      </div>
  );
}

export default App;
