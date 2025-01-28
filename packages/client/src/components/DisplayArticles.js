import { Article } from './Article';
import './DisplayArticles.css';

// optimisation : cette fonction est en dehors du composant
// elle ne sera pas re-définie à chaque render
const randomPaleColor = () => {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 100%, 90%)`;
};

/**
 * DisplayArticles component for displaying a list of articles.
 * @param {Object} props - The properties object.
 * @param {Array} props.articles - The list of articles to display.
 * @param {number} props.articles[].id - The ID of the article.
 * @param {string} props.articles[].date - The date of the article.
 * @param {string} props.articles[].title - The title of the article.
 * @param {string} props.articles[].content - The content of the article.
 */
export const DisplayArticles = ({ articles }) => (
	<div className="DisplayArticles">
		<ul>
			{articles.map((article) => (
				<li key={article.id} style={{ backgroundColor: randomPaleColor() }}>
					<Article
						date={article.date}
						content={article.content}
						title={article.title}
					/>
				</li>
			))}
		</ul>
	</div>
);
