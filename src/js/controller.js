// Global app controller

import { VIEW } from "./views/view.js";
import { MDL } from "./models/model.js";
import { elements } from "./elements.js";


const CTRL = (function() {

    const getRecipes = (query) => {

        //prepare UI for results

        //execute search
        return MDL.search.getResults(query);

        //render results to ui
    };



    return {
        getRecipes,
    };
} () );



elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(elements.searchInput.value);
    CTRL.getRecipes(elements.searchInput.value)
    .then((recipeData) => {
        console.log(recipeData);
    })
    .catch((err) => {
        console.log(err);
    });
});
