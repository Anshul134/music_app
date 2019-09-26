import express from 'express';
import {ROUTES as appRoutes} from '../appData';

import SongsModels from '../db/models/SongsModel';
import SongsModel from '../db/models/SongsModel';

const router = express.Router();

const sampleSongs = [
    {name: 'Mad World', artist: 'Gary Jules', album: 'Dony Darko', clipArt: 'mad_world.jpg', mood : 'mellow', path: 'mad_world_gary_jules.mp3'},
    {name: 'Mini Cooper', artist: 'Ammy Virk, Diljeet Dosanjh', album: 'Nikka Zildar', clipArt: 'mini_cooper.jpeg', mood : 'romantic', path: 'Mini Cooper Ammy Virk.mp3'},
    {name: 'Mad World', artist: 'Gary Jules', album: 'Dony Darko', clipArt: 'mad_world.jpg', mood : 'mellow', path: 'mad_world_gary_jules.mp3'},
    {name: 'Mini Cooper', artist: 'Ammy Virk', album: 'Nikka Zildar', clipArt: 'mini_cooper.jpeg', mood : 'romantic', path: 'Mini Cooper Ammy Virk.mp3'},
    {name: 'Mad World', artist: 'Gary Jules', album: 'Dony Darko', clipArt: 'mad_world.jpg', mood : 'mellow', path: 'mad_world_gary_jules.mp3'},
    {name: 'Mini Cooper', artist: 'Ammy Virk', album: 'Nikka Zildar', clipArt: 'mini_cooper.jpeg', mood : 'romantic', path: 'Mini Cooper Ammy Virk.mp3'},
    {name: 'Mad World', artist: 'Gary Jules', album: 'Dony Darko', clipArt: 'mad_world.jpg', mood : 'mellow', path: 'mad_world_gary_jules.mp3'},       
];


router.get(appRoutes.HOME, (req,res) => {
    res.send({data: []});
});

router.get(appRoutes.FETCH_ALL, (req, res) => {
    SongsModels.fetch_all()
                .then((data) => res.json({data}) )
                .catch((err) => res.json({err}) );
});

router.get('/insert', (req, res) => {
    let insertArr = sampleSongs.map( (sample) => {
        SongsModel.insert_songs(sample);
    });
    Promise.all([insertArr])
           .then( (data) => {
               console.log(data);
               res.json({data});
           }).catch((err) => {
               res.json({err});
           })
});

router.get('/delete', (req,res) => {
    SongsModel.delete_songs()
              .then( data => {
                  console.log('res delete>>>', data);
                  res.json({data});
              }).catch((err => {
                  res.json({err});
              }))
});

router.get('/fetch_one', (req, res) => {
    SongsModel.fetch_one(req.query)
              .then((data) => {
                res.json({data});
              }).catch((err) => {
                  res.json({err});
              })
})

export default router;