// Global app controller

import { VIEW } from "./views/view.js";
import { MDL } from "./models/model.js";
import { elements } from "./elements.js";
let state = MDL.state;


const CTRL = (function() {

    const getRecipesAndRender = () => {
        return new Promise((resolve, reject) => {
            //prepare UI for results
            //execute search
            //render results to ui

            state.currentSearch = elements.searchInput.value;
            // console.log(state.currentSearch); //log search

            MDL.search.getResults(state.currentSearch)
            .then((recipeData) => {
                // console.log(recipeData.data);//log results
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
