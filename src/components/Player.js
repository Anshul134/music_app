import React, {Component} from 'react';

class Player extends Component {
    renderPlayer({name, album, artist, clipArt, songId, path}) {
        let audio = document.createElement('AUDIO');
        audio.src = `/assets/songs/${path}`;
        audio.setAttribute('type', 'audio/mpeg');
        
        if(document.getElementById('audioWrap').hasChildNodes()) {
            document.getElementById('audioWrap').replaceChild(audio, document.getElementById('audioWrap').childNodes[0])
        }
        else
            document.getElementById('audioWrap').append(audio);
            console.log("Yeesssss");
        audio.setAttribute('controls', true);
        audio.setAttribute('id', 'audio-player');
        audio.classList.add('audio-player');
        audio.play();
    }
    componentDidMount() {
        const {name, album, artist, clipArt, songId} = this.props.songObj;
        
        let audioWrap =  document.getElementById('audioWrap');
        
        this.renderPlayer(this.props.songObj)
    }
    componentWillUpdate() {
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