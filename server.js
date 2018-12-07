const   express    = require("express"),
        app        = express(),
        colors     = require("colors"),
        bodyParser = require("body-parser"),
        hbs        = require("hbs");

// SETUP =============
const PORT = process.env.PORT || 3000;

app.set("views", __dirname + "/dist");
app.set("view engine", "hbs");
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({extended: true}));


// ROUTES ===========
app.get("/", (req, res) => {
    res.status(200)
        .render("index");
});


app.get("*", (req, res) => {
    res.status(404)
        .send("<h1>unfortunately, this page does not exist...</h1>");
});


// SERVER START ============
app.listen(PORT, () => {
    console.log(`Server has started on: ${PORT}`.green);
});
