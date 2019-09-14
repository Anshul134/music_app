import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SongPreview from './SongPreview';

class Home extends Component {
    
    render() {
        const {musicPreviews, pageHead} = this.props; 
        
        return(
            <div className='Home-wrap container'>
                <h3 className='page-heading text-center'>{pageHead}</h3>
                <div className='music-previews'>
                    <div className='container'>
                       
                            <div className='music-preview-wrap'>
                                {musicPreviews.map( (song, index) => 
                                    <SongPreview songObj = {song} key={index}/>
                                )}
                            </div>
                        
                    </div>
                </div>

            </div>
        );
    }
};

Home.propTypes = {
    pageHead : PropTypes.string.isRequired,
    musicPreviews : PropTypes.array.isRequired
}

export default Home;