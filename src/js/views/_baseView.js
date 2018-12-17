import { MDL } from "../models/model";
import { elements } from "../elements";
import { state } from "../state";

const baseView = {

    renderLoader: function(parent) {
        const loader = `
            <div class="loader">
                <svg>
                    <use href="img/icons.svg#icon-cw"></use>
                </svg>
            </div>
        `;
        parent.insertAdjacentHTML("afterbegin", loader);
    },

};

export { baseView };
