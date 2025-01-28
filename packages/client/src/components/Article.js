import { parseISO, format } from 'date-fns';

/**
 * Article : display props of an article
 * @param {Object} props - The properties object.
 * @param {string} props.content - The content of the article.
 * @param {date} props.date
 * @param {title} props.title
 * */
export const Article = ({
	content,
	date,
	title,
}) => (
	<>
		<small>
			{/*
					example of using a lib for formating date
					https://www.npmjs.com/package/date-fns
				*/}
			{format(parseISO(date, 'isoDateTime'), 'PPPP')}
		</small>
		<div className="ArticleContent">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	</>
);
