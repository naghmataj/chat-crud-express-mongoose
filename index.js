const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then( () => {
    console.log("Connection successful");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//index route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

//New Route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

//Create Route
app.post("/chats", (req,res) =>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    // console.log(newChat);
    newChat
        .save()
        .then(res => {
            console.log("New Chat was saved!");
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect("/chats");
});


//EDIT route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});


//UPDATE route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg},
        {runValidators: true, new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//DESTROY route
app.delete("/chats/:id",async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
});

app.get("/", (req, res) => {
    res.send("working...");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
