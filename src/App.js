import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Search from './pages/Search';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Header from "./components/Header";


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header />
            <ToastContainer position="top-center"/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/add" component={AddEdit}/>
      <Route  exact path="/update/:id" component={AddEdit}/>
      <Route  exact path="/view/:id" component={View}/>
      <Route  exact path="/about" component={About}/>
      <Route  exact path="/search" component={Search}/>

           </Switch>
         
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
