import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return( 
    <div className="App">
      <BrowserRouter>
        {/* Navbar display in all pages */}
        <Navbar/>
        <Switch>
          <Route path="/stations" exact component={Station}/>
          <Route path="/trips" exact component={Trip}/>
          <Route path="/" component={NotFound}/>
        </Switch>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App;
