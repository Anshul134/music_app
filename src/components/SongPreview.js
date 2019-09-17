import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

class SongPreview extends Component {
    render() {
        const {name, album, artist, clipArt, songId} = this.props.songObj;
        return(
            <div className='col-md-3 song-preview'>
                <div className=''>
					
                    <div className='song-preview-card' >
												<Link to={`/streamMusic/${songId}`} >
													<div className='clip-art'>
															<img src = {`/assets/img/songs/${clipArt}`} className='song-preview-clipart' height='180'/>
													</div>
													<div className="song-preview-name">
														<p>{name}</p>
													</div>
													<div className="song-preview-artist">
														<p>{artist}</p>
													</div>
												</Link>	
										</div>		
									</div>    
            </div>
        )
    }
};

SongPreview.propTypes = {
	songObj : PropTypes.object.isRequired,
}

export default SongPreview;