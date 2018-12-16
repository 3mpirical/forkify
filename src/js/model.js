import axios from "axios";

const MDL = (function() {

    const forkifySearch = (searchParam) => {
        return new Promise((resolve,reject) => {
            const url = `/api/search-food/${searchParam}`;

            axios.get(url)
            .then((searchData) => {
                resolve(searchData.data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };




    return {
        forkifySearch,
    };

} () );






export { MDL };
