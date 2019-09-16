import React, {Component} from 'react';
import SimilarPreview from './SimilarPreview';
class Similar extends Component {
    render() {
        const {songsArr} = this.props;
      
        return (
            <div className='similar-songs-wrap col-md-4'>
                <div className='similar-songs-head'>
                    <p>Similar Songs</p>
                </div>
                <div className='similar-song-overview '>
                    {songsArr.map( (song) => 
                        <SimilarPreview song ={song} key= {song.songId} />    
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Similar;