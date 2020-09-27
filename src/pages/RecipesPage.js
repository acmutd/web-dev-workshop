import React from "react";
import Recipe from "../components/Recipe";

function RecipesPage() {
  const recipe = [
    {
      title: "Chocolate Cake",
      img:
        "https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg",
      ingredients: [
        "1 ½ cups All purpose flour",
        "1 cup Granulated Sugar",
        "1/2 cup Cocoa powder",
        "1 teaspoon Baking soda",
        "1/2 teaspoon Salt",
        "1 cup Milk",
        "½ cup Oil",
        "1 teaspoon Pure Vanilla Extract",
        "2 teaspoon Vinegar",
      ],
      recipe: [
        "Preheat oven to 350 degree F or 180 degree C.",
        "Line the tray with parchment circle.",
        "Sieve and Mix all dry ingredients (All purpose flour, cocoa powder, baking soda and salt) except sugar in a bowl. Always sieve from a height for tender crumb outcome",
        "Add vinegar to milk and let it stand for a minute.",
        "Add granulated sugar to milk and vinegar mixture and whip for 1 minute until the sugar is almost melted.",
        "Now add in oil. Whip the liquid ingredients until oil is completely blended well.",
        "Mix liquid in the dry ingredients - whip with a electric whipper or by a spatula or hand whip only till the batter is smooth and no lumps - don't over beat - very important.",
        "Bake in pre-heated oven for about 30-40 minutes or till toothpick inserted in center of cake will come out with few dry crumbs. Don't over bake.",
        "Remove it from oven and after 5 minutes remove cake on wire rack and let them cool completely before frosting.",
      ],
    },
    {
      title: "Chocolate Buttercream",
      img:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Chocolate_Buttercream.jpg.rend.hgtvcom.826.620.suffix/1371585643170.jpeg",
      ingredients: [
        "1 cup unsalted butter, softened to room temperature",
        "3 and 1/2 cups confectioners’ sugar",
        "1/2 cup unsweetened natural or dutch-process cocoa powder",
        "3 Tablespoons heavy cream or milk",
        "1/4 teaspoon salt",
        "2 teaspoons pure vanilla extract",
      ],
      recipe: [
        "With a handheld or stand mixer fitted with a paddle or whisk attachment, beat the butter on medium speed until creamy – about 2 minutes.",
        "Add confectioners’ sugar, cocoa powder, heavy cream, salt, and vanilla extract.",
        "Beat on low speed for 30 seconds, then increase to high speed and beat for 1 full minute. Add 1/4 cup more confectioners’ sugar or cocoa powder if frosting is too thin or another Tablespoon of cream if frosting is too thick.",
        "Cover tightly and store for up to 1 week in the refrigerator or up to 3 months in the freezer.",
        "After freezing, thaw in the refrigerator then beat the frosting for a few seconds so it’s creamy again.",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "beige" }}>
      <h1>Your Recipes</h1>
      <div style={{ display: "flex" }}>
        {recipe.map((value, index) => {
          return <Recipe recipe={value} key={index} />;
        })}
      </div>
    </div>
  );
}

export default RecipesPage;
