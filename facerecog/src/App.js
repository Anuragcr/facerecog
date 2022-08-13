import React, {Component} from 'react';
import Navigation  from './components/navigation/navigation';
import Logo from './components/LOGO/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/Rank/rank'
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
      
       <Navigation />
       <Logo />
       <Rank />
      
      <ImageLinkForm />
     

      </div>
    );
  }
  
}


export default App;
