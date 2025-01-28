import { useState } from 'react';
import { DisplayArticles } from './components/DisplayArticles';
import { FormArticle } from './components/FormArticle';

import './App.css';

const BASE_API_URL = 'http://127.0.0.1:8000';

function App() {
	console.log('App.js');

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [articles, setArticles] = useState([]);

	// console.log(`DEBUG title = ${title} content = ${content}`);

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleChangeContent = (event) => {
		setContent(event.target.value);
	};

	const handleClickGenerateLorem = async () => {
		const fetchTodos = (await fetch('https://jsonplaceholder.typicode.com/todos'));
		const todos = await fetchTodos.json();
		const randomContent = Math.floor(Math.random() * todos.length);
		setContent(todos[randomContent].title || 'error');
		setTitle(todos[randomContent].title || 'error');
	};

	const handleClickGetArticles = async () => {
		const resp = await fetch(`${BASE_API_URL}/articles`);
		const data = await resp.json();
		setArticles(data);
	};
	const handleSubmitArticle = async (e) => {
		e.preventDefault();
		const resp = await fetch(`${BASE_API_URL}/articles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, content }),
		});
		console.log(resp);
		const data = await resp.json();
		console.log(data);
		setArticles(data);
		setTitle('');
		setContent('');
	};
	return (
		<div className="App">
			<h1>TP3 - articles</h1>
			<FormArticle
				content={content}
				handleChangeContent={handleChangeContent}
				handleChangeTitle={handleChangeTitle}
				handleSubmitArticle={handleSubmitArticle}
				handleClickGenerateLorem={handleClickGenerateLorem}
				title={title}
			/>
			<button type="button" onClick={handleClickGetArticles}>
				Get Articles
			</button>
			<DisplayArticles articles={articles} />
		</div>
	);
}

export default App;
