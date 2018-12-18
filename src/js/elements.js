const elements = {
    searchForm: document.querySelector(".search"),
    searchInput: document.querySelector(".search__field"),
    searchResList: document.querySelector(".results__list"),

    loader: function() {
        return document.querySelector(".loader");
    },
};

export { elements };
