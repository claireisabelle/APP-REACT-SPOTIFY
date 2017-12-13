import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bootstrap.min.css';

let defaultTextColor = '#FFF';

let defaultStyle = {
  color: defaultTextColor,

}

class Aggregate extends Component{
  render(){
    
    return(

      <div className ="aggregate">
        <h2 style={{ color: defaultTextColor }}>Number Text</h2>
      </div>

    );

  }

}

class Filter extends Component{
  render(){
    return(
      
      <div>
        <img />
        <input type="text"/>
      </div>

    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div className="playlist">
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Qong 3</li>
        </ul>
      </div>
    );
  }
}


class App extends Component {
  render() {
  
    return(
      <div className="App">
        
        <h1 style={{ color: defaultTextColor }}>Title</h1>

        <Aggregate />
        <Aggregate />

        <Filter />

        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />

      </div>
    );
  }
}

export default App;
