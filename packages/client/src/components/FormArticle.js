import './FormArticle.css';

/**
 * FormArticle component for submitting articles.
 * @param {Object} props - The properties object.
 * @param {string} props.content - The content of the article.
 * @param {function} props.handleChangeContent - Function to handle content change.
 * @param {function} props.handleChangeTitle - Function to handle title change.
 * @param {function} props.handleSubmitArticle - Function to handle form submission.
 * @param {function} props.handleClickGenerateLorem - Function to handle form submission.
 * @param {string} props.title - The title of the article.
 */
export const FormArticle = ({
	content,
	handleChangeContent,
	handleChangeTitle,
	handleSubmitArticle,
	handleClickGenerateLorem,
	title,
}) => (
	<form className="Form FormArticle" onSubmit={handleSubmitArticle}>
		<label htmlFor="title">
			Title
		</label>
		<input type="text" id="title" onChange={handleChangeTitle} value={title} />
		<label htmlFor="content">
			Content
		</label>
		<textarea id="content" onChange={handleChangeContent} value={content} />
		<button className="btn btn-generate" type="button" onClick={handleClickGenerateLorem}>
			Generate Lorem
		</button>
		<button className="btn" type="submit">
			Submit
		</button>
	</form>
);
