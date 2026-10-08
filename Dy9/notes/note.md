<%- include("partials/header.ejs") %> <!-- file paths must be relative to the location they are in-->

app.use(express.static("public"));//for rendering static files(css, etc).