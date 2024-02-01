import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);
  // const article = articles.find((article) => article.id === id);
  const article = articles?.find((article) => article.id === id);

  return (
    <div className="singleArticle">
      {article ? (
        <>
          <h1>{article.title}</h1>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.body}</p>
        </>
      ) : (
        <p>No article found with the ID "{id}"</p>
      )}
    </div>
  );
};

export default SingleArticle;
