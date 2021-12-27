import React from "react"
import {BrowserRouter as Router, Routes as MyRoute, Route} from "react-router-dom"
import Home from '../screen/Home'
import Product from "../screen/Product"

function Routes() {
    return (
      <Router>
        <MyRoute>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </MyRoute>
      </Router>
    )
  }
  
  export default Routes