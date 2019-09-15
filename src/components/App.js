import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//importing other components for rendering

/*
    *Navbar.js for rendering navbar on each page
    *Home.js for rendering the home page
*/

import Navbar from './Navbar';
import Home from './Home';
import StreamSong from './StreamSong';

class App extends Component {
    state = {
        musicPreviews : [
            {'songId':1,'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg', 'mood' : 'mellow'},
            {'songId':2,'name': 'Mini Cooper', 'artist': 'Ammy Virk, Diljeet Dosanjh', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg', 'mood' : 'romantic'},
            {'songId':3,'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg', 'mood' : 'mellow'},
            {'songId':4,'name': 'Mini Cooper', 'artist': 'Ammy Virk', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg', 'mood' : 'romantic'},
            {'songId':5,'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg', 'mood' : 'mellow'},
            {'songId':6,'name': 'Mini Cooper', 'artist': 'Ammy Virk', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg', 'mood' : 'romantic'},
            {'songId':7,'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg', 'mood' : 'mellow'},       
        ]
    }
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />
                    <Route path='/' exact={true}  render = {() => 
                        <Home pageHead='Music App' musicPreviews ={this.state.musicPreviews}/>
                    } />
                    <Route path='/streamMusic/:id'   render = {({match}) => 
                        <StreamSong songObj={this.state.musicPreviews.filter( (music) => 
                            music.songId == match.params.id
                        
                        )}/>
                        } />
                    
                </div>
            </Router>                
        );
    }
}



export default App;