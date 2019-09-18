import React, {Component} from 'react';

class StreamHead extends Component {
     state = {
        style : {}
    }
    changeStyle(mood) {
        if(mood=== 'mellow') {
            this.setState({
                style: {background: '#31311a7a'}
            })
        }
        if(mood === 'romantic') {
            this.setState({
                style: {background: '#045c7dc2'}
            })
        }
    }
    componentDidMount() {
        //this.changeStyle(this.props.songObj.mood)
    }
    render() {
        const {songId, name, artist, album, clipArt, mood} = this.props.songObj;
       
        return(
            <div className='stream-head'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>
                           
                            <div className='stream-head-bg' style={{background: (mood=== 'mellow')?'#31311a7a':'#045c7dc2'}}>
                                <div className='col-md-3 col-sm-12'>
                                    <img className='img img-responsive stream-clipArt' src={`/assets/img/songs/${clipArt}`}/>
                                </div>
                                <div className='page-title col-md-4 col-sm-12'>
                                    <p className='page-title-name'>{name}</p>
                                    <p className='page-title-artists'>{artist}</p>
                                    <p className='page-title-album'>Album: {album}</p>

                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StreamHead;