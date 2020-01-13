import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar'


function App() {
  return (
    <div>
      <NavigationBar/>
      <p className = "otanoshimini">This site is still working on progress.</p>
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
