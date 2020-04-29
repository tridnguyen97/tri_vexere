import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
// import this css in order to re-render data-table for aesthetic
import '@material/data-table/dist/mdc.data-table.css'

//components
import Navbar from "./components/Navbar"
import Station from "./components/Station"
import Trip from "./components/Trip"
import NotFound from "./components/NotFound"

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
