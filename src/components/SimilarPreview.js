import React, {Component} from 'react';

class SimilarPreview extends Component {
    render() {
        const {songId, name, artist, album, clipArt} = this.props.song;
        return (
            <div className='similar-preview-wrap '>
               <div className='similar-preview-img'>
                   <img src={`/assets/img/songs/${clipArt}`} className='similar-preview-clipart' />
               </div>
               <div className='similar-preview-details'>
                    <p className='similar-preview-name'>{name}</p>
                    <p className='similar-preview-body'>{artist}</p>
                    <p className='similar-preview-body'>{album}</p>
               </div>
            </div>
        );
    }
}

export default SimilarPreview;