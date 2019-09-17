import React, {Component} from 'react';

class Player extends Component {
    renderPlayer({name, album, artist, clipArt, songId, path}) {
        let audio = document.createElement('AUDIO');
        audio.src = `/assets/songs/${path}`;
        audio.setAttribute('type', 'audio/mpeg');
        document.getElementById('audioWrap').append(audio);
        audio.setAttribute('controls', true);
        audio.classList.add('audio-player');
        audio.play();
    }
    componentDidMount() {
        console.log(">>>>",this.props.songObj);
        const {name, album, artist, clipArt, songId} = this.props.songObj;
        this.renderPlayer(this.props.songObj)
    }
    render() {
        const {name, album, artist, clipArt, songId} = this.props.songObj;
        return(
            <div className='music-player-wrap col-md-12'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="audio-wrap" id='audioWrap'></div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default Player;