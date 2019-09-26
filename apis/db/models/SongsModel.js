import Songs from '../schemas/Songs';


const SongsModel = {
    fetch_all : (req) => {
        return new Promise( (resolve, reject) => {
            Songs.find({})
                 .then( (data) =>  resolve(data) )
                 .catch( (err) => { 
                    console.log(">>>>>>>>",err); 
                    reject(err) });
        })
    },
    insert_songs : (sample) => {
        return new Promise( (resolve, reject) => {
            let song = new Songs(sample);
            song.save()
                .then( (res) => resolve(res))
                .catch( (err) => reject(err));
        });
    },
    delete_songs: () => {
        return new Promise( (resolve, reject) => {
            Songs.remove({})
                 .then( (res) => resolve(res))
                 .catch(err => {
                     console.log("error deleting>>>", err);
                     reject(err);
                 })
        })
    },
    fetch_one : (body) => {
        return new Promise( (resolve, reject) => {
            Songs.find(body)
                 .then((res)=> resolve(res))
                 .catch( (err) => reject(err)); 
        })
    }
}

export default SongsModel;