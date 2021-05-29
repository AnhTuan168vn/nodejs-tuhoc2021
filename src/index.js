const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { extname } = require('path');

const app = express();

//HTTP logger
//app.use(morgan('combined'));

//Hiện Thị Ảnh
app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

//Setting
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));
console.log('Server on port start:', app.get('port'));