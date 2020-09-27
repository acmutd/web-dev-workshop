import React from "react";

function Recipe(props) {
  const recipe = props.recipe;
  return (
    <div style={{ width: "50%", padding: 25 }}>
      <h2>{recipe.title}</h2>
      <img src={recipe.img} alt="recipe" width="150" height="150" />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <h3>Recipe</h3>
      <ol>
        {recipe.recipe.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </div>
  );
}

export default Recipe;
