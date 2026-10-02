<!-- 02-10-2026 -->
res.sendFile(__dirname + "/public/index.html");//only works for static files

//for dynamic websites we need 
res.render("index.js",{name: req.body["name"]});

app.set("view engine", "ejs");//add this line while using ejs

<!-- 03-10-2026 -->
<%= %>//JS output
<% console.log("hello"); %>//js execute
<%- %>//interpreted as HTML
<%% %%>//to show EJS tag
<%- include("header.ejs") %>//insert another ejs file
