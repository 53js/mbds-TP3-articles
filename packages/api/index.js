const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

const articles = [
	{
		id: 1,
		title: 'Article 1',
		content: 'Lorem ipsum',
		date: (new Date()).toISOString(),
	},
	{
		id: 2,
		title: 'Article 2',
		content: 'Lorem ipsum',
		date: (new Date()).toISOString(),
	},
	{
		id: 3,
		title: 'Article 3',
		content: 'Lorem ipsum',
		date: (new Date()).toISOString(),
	},
	{
		id: 4,
		title: 'Article 4',
		content: 'Lorem ipsum',
		date: (new Date()).toISOString(),
	},
];

app.use(express.json());

app.use(cors()); //autorise le CORS

app.get('/', (req, res) => { // GET SUR localhost:8000/
	res.send('Hello World!');
});

app.get('/articles', (req, res) => { // GET SUR localhost:8000/articles
	res.json(articles);
});

app.post('/articles', (req, res) => { // POST SUR localhost:8000/articles
	const { body } = req; // récupère le body de la requête
	// eslint-disable-next-line no-console
	console.log(`body ==> ${body}`);
	articles.push({
		...body,
		date: (new Date()).toISOString(),
		id: articles.length + 1,
	}); // ajoute l'article au tableau
	res.json(articles); // renvoie le tableau mis à jour au format JSON
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on ${port}`);
});
