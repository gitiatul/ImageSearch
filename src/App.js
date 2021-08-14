import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Home from "./components/Home";





function App(){
  return(
    <div>
    <Route exact path="/">
    <Home />
    </Route>
    </div>
  )
}

export default App;