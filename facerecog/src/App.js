import React, {Component} from 'react';
import Navigation  from './components/navigation/navigation';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      
       <Navigation />
      {/* <Logo />
      <ImageLinkForm />
      <facerecognition /> */}

      </div>
    );
  }
  
}


export default App;