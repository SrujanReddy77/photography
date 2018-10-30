import React, { Component } from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter,Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Route path="/" component={Navbar} />
         <Route path="/" exact component={Homepage} />
         <Route path="/GALLERY" exact component={Gallery} />
         <Route path="/EVENTS" exact component={Events} />
         <Route path="/ABOUT" exact component={About} />
         <Route path="/CONTACT" exact component={Contact} />
         <Route path="/" component={Footer} />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
