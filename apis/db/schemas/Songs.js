import mongoose, { mongo } from 'mongoose';

const Schema = new mongoose.Schema({
    name: String,
    artist: String,
    album: String,
    clip_art: String,
    mood: String,
    path: String,
    clipArt: String,
});
const Songs = mongoose.model('Songs', Schema);
export default Songs;