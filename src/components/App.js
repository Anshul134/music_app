import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import axios from 'axios';

//importing other components for rendering

/*
    *Navbar.js for rendering navbar on each page
    *Home.js for rendering the home page
*/

import Navbar from './Navbar';
import Home from './Home';
import StreamSong from './StreamSong';

class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/api/fetch_all_songs')
             .then(data => data.data)
             .then(data => {
                console.log("data>>>>>", data.data); 
                this.setState({
                    musicPreviews: data.data
                })
                //res.json({data})
            });
    }

    state = {
        musicPreviews : []
    }
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />
                    <Route path='/' exact={true}  render = {() => 
                        <Home pageHead='Music App' musicPreviews ={this.state.musicPreviews}/>
                    } />
                    <Route path='/streamMusic/:id'   render = {({match}) => 
                        <StreamSong songObj={this.state.musicPreviews.filter( (music) => {
                            console.log(match.params.id)
                            return music._id == match.params.id
                        
                        })}  songArr = {this.state.musicPreviews}/>
                    } />
                  
                </div>
            </Router>                
        );
    }
}



export default App;