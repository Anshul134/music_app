import express from 'express';
const app = express();
//import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import apiRoutes from './apis';

require('dotenv').config();

// app.use(sassMiddleware({
//     src: path.join(__dirname, 'scss'),
//     dest: path.join(__dirname, 'public')
// }));

app.use(express.static('./public'));



app.set('view engine', 'ejs');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(process.env.PORT, () =>{
    console.log(`listening to ${process.env.PORT}`);
});
