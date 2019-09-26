import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/music_app";

const db = mongoose.connect(url, {useNewUrlParser: true}, (err) => {
    if(err)  throw err;
    console.log('connected to db');
});

export default db;
