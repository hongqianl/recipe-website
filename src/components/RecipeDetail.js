import { useParams, Link } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes[parseInt(id)];
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
      <br />
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;