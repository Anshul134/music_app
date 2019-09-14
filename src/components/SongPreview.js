import React, {Component} from 'react';

class SongPreview extends Component {
    render() {
        const {name, album, artist, clipArt} = this.props.songObj;
        return(
            <div className='col-md-3 song-preview'>
                <div className=''>
                    <div className='song-preview-card'>
                        <div className='clip-art'>
														<img src = {`/assets/img/songs/${clipArt}`} className='song-preview-clipart' height='180'/>
 												</div>
												<div className="song-preview-name">
													<p>{name}</p>
												</div>
												<div className="song-preview-artist">
													<p>{artist}</p>
												</div>
                    </div>
									</div>    
            </div>
        )
    }
}

export default SongPreview;