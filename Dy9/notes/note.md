<%- include("partials/header.ejs") %> <!-- file paths must be relative to the location they are in-->

app.use(express.static("public"));//for rendering static files(css, etc).
app.use(express.static("public"));//declaring folder with static elements

res.render("solution.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  }); //passing in data to be used in index.ejs 