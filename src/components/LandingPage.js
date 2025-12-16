import { Link } from 'react-router-dom';

const LandingPage = ({ recipes }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Favorite Recipes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {recipes.map((recipe, index) => (
          <Link key={index} to={`/recipe/${index}`} style={{ margin: '10px', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '250px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <img src={`https://via.placeholder.com/200x150?text=${encodeURIComponent(recipe.title.split(' ')[0])}`} alt={recipe.title} style={{ width: '100%', borderRadius: '4px' }} />
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;