import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bootstrap.min.css';

let defaultTextColor = '#FFF';

let defaultStyle = {
  color: defaultTextColor,

};

let fakeServerData = {
  user:{
    name: 'Claire',
    playlists:[
      {
        name: 'My favourite',
        songs: [
          {name: 'Hotel California', duration: 1200},
          {name: 'Friends', duration: 1238},
          {name: 'Beat it', duration: 840},
          {name: 'Over the Rainbow', duration: 1445}
        ]
      },
      {
        name: 'Trip hop',
        songs: [
          {name: 'In the waiting line', duration: 1458},
          {name: 'Archive', duration: 1047},
          {name: 'Orange sky', duration: 938}
        ]
      },
      {
        name: 'Rock',
        songs: [
          {name: 'Killer Queen', duration: 1322},
          {name: 'Rock in the cashbah', duration: 1238},
          {name: 'The show must go on', duration: 1125}
        ]
      },
      {
        name: 'Quiet',
        songs: [
          {name: 'Concerto 23', duration: 1648},
          {name: 'Bolero', duration: 11125}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component{
  render(){
    
    return(

      <div className ="aggregate">
        <h2 style={{ color: defaultTextColor }}>
          {this.props.playlists.length} playlists
        </h2>
      </div>

    );

  }

}

class HoursCounter extends Component{
  render(){
    
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)

    return(

      <div className ="aggregate">
        <h2 style={{ color: defaultTextColor }}>
          {Math.round(totalDuration/3600)} hours
        </h2>
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
  constructor(){
    super();
    this.state = {
      serverData:{}
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
      }, 2000
    );
  }

  render() {
  
    return(
      <div className="App">
        
        {this.state.serverData.user ?

          <div>

            <h1 style={{ color: defaultTextColor }}>
            {this.state.serverData.user.name}'s playlist
            </h1>

            <PlaylistCounter playlists={this.state.serverData.user.playlists} />

            <HoursCounter playlists={this.state.serverData.user.playlists} />

            <Filter />

            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />

          </div> : <h1 style={{...defaultStyle}}>Loading....</h1>
        }
        
   
          


      </div>
    );
  }
}

export default App;
