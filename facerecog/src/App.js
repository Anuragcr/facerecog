import React, {Component} from 'react';
import Navigation  from './components/navigation/navigation';
import Logo from './components/LOGO/Logo';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      
       <Navigation />
       <Logo />
      {/* 
      <ImageLinkForm />
      <facerecognition /> */}

      </div>
    );
  }
  
}


export default App;
