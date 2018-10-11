var express		=require('express'),
	app			=express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/details', (req, res) => {
	res.render('details');
});

app.listen(app.get('port'), () => console.log('Listening on port' + app.get('port')));	
