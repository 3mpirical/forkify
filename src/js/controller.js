// Global app controller

import { VIEW } from "./views/view.js";
import { MDL } from "./models/model.js";
import { elements } from "./elements.js";
import { state } from "./state";


const CTRL = (function() {

    const getRecipesAndRender = () => {
        return new Promise((resolve, reject) => {

            state.currentSearch = elements.searchInput.value;
            VIEW.renderLoader(elements.searchResList);

            MDL.getResults(state.currentSearch)
            .then((recipeData) => {
                state.recipeArray = recipeData.data;
                VIEW.clearResults();
                VIEW.renderResults();
                VIEW.clearInput();
            })
            .catch((err) => {
                console.log(err);
            });
        });
    };



    return {
        getRecipesAndRender,
    };
} () );


elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    CTRL.getRecipesAndRender()
    .then(() => {

    })
    .catch((err) => {
        console.log(err);
    });
});
