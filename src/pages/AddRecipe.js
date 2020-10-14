import React, { useState } from "react";
import db from "../components/db";

function AddRecipe() {
  let [recipeName, setRecipeName] = useState("");
  let [image, setImage] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [recipeSteps, setRecipeSteps] = useState("");

  function saveRecipe() {
    const recipe = {
      title: recipeName,
      img: image,
      ingredients: ingredients.split(","),
      recipe: recipeSteps.split("."),
    };
    console.log(recipe);

    db.collection("recipe")
      .add({
        recipe: recipe,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div style={{ height: "100%", background: "beige" }}>
      <h1 style={{ margin: 0, padding: 20 }}>Add a Recipe</h1>
      <div style={{ textAlign: "center" }}>
        <p>Enter Recipe Name</p>
        <input
          type="text"
          value={recipeName}
          onChange={(event) => setRecipeName(event.target.value)}
        />
        <p>Enter Link to Image</p>
        <input
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <p>Enter Ingredients (seperated by commas)</p>
        <textarea
          cols="60"
          rows="10"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <p>Enter Recipe (seperated by periods)</p>
        <textarea
          cols="60"
          rows="10"
          value={recipeSteps}
          onChange={(event) => setRecipeSteps(event.target.value)}
        />
        <br />
        <button onClick={saveRecipe}>Save Recipe</button>
      </div>
    </div>
  );
}

export default AddRecipe;
