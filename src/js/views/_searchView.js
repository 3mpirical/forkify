import { MDL } from "../models/model";
import { elements } from "../elements";
import { state } from "../state";

const searchView = (function(MDL, elements, state) {

    const limitRecipeTitle = function(title, limit = 17) {
        if(title.length > limit) {
            const titleArr = title.split(" ");

            let titleStr = titleArr.reduce((total, item, index) => {
                if(total.length + item.length <= limit) {
                    return `${total} ${item}`;
                }
                return total;
            }, "");

            return titleStr + "...";
        }

        return title;
    };

    const clearInput = function() {
        elements.searchInput.value = "";
    };

    const clearResults = function() {
        elements.searchResList.innerHTML = "";
    };

    const renderResults = function() {
        state.recipeArray
            .map((item, index, arr) => {
                return (`
                    <li>
                        <a class="results__link results__link--active" href="#${item.recipe_id}">
                            <figure class="results__fig">
                                <img src="${item.image_url}" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitRecipeTitle(item.title)}</h4>
                                <p class="results__author">${item.publisher}</p>
                            </div>
                        </a>
                    </li>
                `);
            })
            .forEach((item, index, array) => {
                elements.searchResList.insertAdjacentHTML("beforeend", item);
            });
    };

    return {
        clearInput,
        clearResults,
        renderResults,
    };

} (MDL, elements, state) );


export { searchView };
