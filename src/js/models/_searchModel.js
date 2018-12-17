import axios from "axios";

const searchModel = (function() {

    const getResults = (searchParam) => {
        return new Promise((resolve,reject) => {
            const url = `/api/search-food/${searchParam}`;

            axios.get(url)
            .then((searchData) => {
                if(!searchData || searchData.data.isSuccessful === false) {
                    reject(searchData);
                } else {
                    resolve(searchData.data);
                }
            })
            .catch((err) => {
                reject(err);
            });
        });
    };




    return {
        getResults,
    };

} () );


export { searchModel };
