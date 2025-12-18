import { useParams, Link } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes[parseInt(id)];
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div style={{ padding: '20px', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      <h1>{recipe.title}</h1>
      <pre>{recipe.raw}</pre>
      <br />
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;