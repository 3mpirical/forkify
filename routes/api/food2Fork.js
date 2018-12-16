const express = require("express"),
      router  = express.Router(),
      axios   = require("axios");

router.get("/api/search-food/:food", (req, res) => {

// api key 8984a0f8a142e40c3bc5f76a49b815a4
    const key = "8984a0f8a142e40c3bc5f76a49b815a4";
    const search = encodeURIComponent(req.params.food);
    const url = `https://www.food2fork.com/api/search?key=${key}&q=${search}`;
    console.log(url);

    axios.get(url)
    .then((foodData) => {
        if(!foodData || foodData.data.count === 0) {
            res.status(404)
                .json({
                    isSuccessful: false,
                    responseText: "data not found",
                    data: null,
                });
        } else {
            res.status(200)
                .json({
                    isSuccessful: true,
                    responseText: "query completed",
                    data: foodData.data,
                });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(400)
            .json({
                isSuccessful: false,
                responseText: "bad request",
                data: err,
            });
    });
});



module.exports = router;
