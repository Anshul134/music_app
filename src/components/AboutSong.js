import React, {Component} from 'react';

class AboutSong extends Component {
    render() {
        const {songId, name, artist, album, clipArt} = this.props.songObj;
        return(
            <div className='about-song-wrap col-md-2'>
                <div className='about-song-head '>
                    <p>About This Song</p>
                </div>
                <div className='about-song-details'>
                    <p className='about-song-heading'>Title</p>
                    <p className='about-song-data'>{name}</p>
                    <p className='about-song-heading'>Artists</p>
                    <p className='about-song-data'>{artist}</p>
                    <p className='about-song-heading'>Album</p>
                    <p className='about-song-data'>{album}</p>
                </div>
            </div>
        )
    }
}   

export default AboutSong;