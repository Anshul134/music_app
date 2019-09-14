import express from 'express';
const app = express();

import apiRoutes from './apis';

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(3000, () =>{
    console.log('listening to 3000');
});
