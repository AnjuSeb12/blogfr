import React from 'react'
import {BrowserRouter, Router, Route} from "react-router-dom"
import datapost from './components/datapost'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Router>
      <Route>
        
          
        <datapost/>
        <getdata/>
        <updatedata/>
        </Route>
      </Router>
      </BrowserRouter>
     

    </div>
  )
}

export default App