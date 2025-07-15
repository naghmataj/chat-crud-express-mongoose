const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then( () => {
    console.log("COnnection successful");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [{
        from: "Neha",
        to: "Priya",
        msg: "Hey, send your exam sheet.",
        created_at: new Date(),
    },
    {
        from: "Rahul",
        to: "Rohan",
        msg: "Hello there",
        created_at: new Date(),
    },
    {
        from: "Shivan",
        to: "Noah",
        msg: "CAn you send me notes?",
        created_at: new Date(),
    },
    {
        from: "Shejal",
        to: "Kajal",
        msg: "Do you have a spare copy",
        created_at: new Date(),
    },
    {
        from: "Shradha",
        to: "Aman",
        msg: "All the best!",
        created_at: new Date(),
    },
    {
        from: "Sheryl",
        to: "Kumar",
        msg: "Shall we go for a walk?",
        created_at: new Date(),
    },
];
Chat.insertMany(allChats);
