import React, {Component} from 'react';

class SongPreview extends Component {
    render() {
        const {name,album} = this.props.songObj;
        return(
            <div className='song-preview'>
                <ul>
                    <li>Name: {name} -- Album: {album}</li>
                </ul>
            </div>
        );
    }
}

export default SongPreview;