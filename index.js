const express = require("express");
const { renderFile } = require("ejs")
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    renderFile(`${process.cwd()}/src/index.ejs`, data, null, function(err, str){
        if(err) {
            console.log("Ha ocurrido un error en ", req.url, ": ", err)
            return res.send("Ha ocurrido un error")
        }

        res.send(str)
    })
});

app.get("*", (req, res) => res.redirect("/"));

app.listen(21824, () => console.log("Dift web lista."));
