const express = require('express');
const res = require('express/lib/response');
const app = express();

const { engine } = require ('express-handlebars');

const port = 505;

app.use(express.static('public'));

app.use('/images',express.static(__dirname + 'public/images'));
app.use('/styling',express.static(__dirname + 'public/styling'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/script',express.static(__dirname + 'public/script'));


app.set('views','./views');
app.set('view engine', 'ejs')

app.engine('ejs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'ejs',
    defaultLayout: 'index',
    partialsDir:`${__dirname}/views/partials`
}));

app.get('/',(req,res)=>{
    res.render('main',{layout:'index'});
})
app.get('/addHostel',(req,res)=>{
    res.render('addHostel',{layout:'hostel'});
})

app.all('*',(req,res)=>{
    res.status(404).send('oooppss!!!!  There is nothing here');
})

app.listen(port,(req,res)=>{
    console.log(`the server is listening on port ${port} .........`);
})
