import React, {Component} from 'react';

//Load other components to be rendered on this component
/*
 * StreamHead.js for this page's head (contains name, clipart, etc.)
 * AboutSong.js for Song's info
 * Player.js for audio player
 * Similar.js for similar songs listing
*/ 
import StreamHead from './StreamHead';
import AboutSong from './AboutSong';
import Player from './Player';
import Similar from './Similar';

class StreamSong extends Component {
    
    render() {
        const song = this.props.songObj[0];
        let songArr = this.props.songArr;
       
        songArr = songArr.filter( (music) => 
            music._id != song._id
        );
    
        const {songId, name, artist, album, clipArt} = song;
        return (
            
            <div className='streamSong'>
                <div className='streamSong-wrap'>
                    <div className='stream-header-wrap'>
                        <StreamHead songObj = {song} />
                        <AboutSong songObj = {song} />
                        <Similar songsArr = {songArr} />
                        <Player songObj = {song} />
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamSong;