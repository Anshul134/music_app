import React, {Component} from 'react';

//importing other components for rendering

/*
    *Navbar.js for rendering navbar on each page
*/

import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
    state = {
        musicPreviews : [
            {'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg'},
            {'name': 'Mini Cooper', 'artist': 'Ammy Virk', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg'},
            {'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg'},
            {'name': 'Mini Cooper', 'artist': 'Ammy Virk', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg'},
            {'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg'},
            {'name': 'Mini Cooper', 'artist': 'Ammy Virk', 'album': 'Nikka Zildar', 'clipArt': 'mini_cooper.jpeg'},
            {'name': 'Mad World', 'artist': 'Gary Jules', 'album': 'Dony Darko', 'clipArt': 'mad_world.jpg'},       
        ]
    }
    render() {
        return (
            <div className='App'>
                <Navbar />
                <Home pageHead={'Music App'} musicPreviews={this.state.musicPreviews}/>
            </div>
        );
    }
}



export default App;