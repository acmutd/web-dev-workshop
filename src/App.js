import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={RecipesPage} />
            <Route path="/add" exact component={AddRecipe} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
