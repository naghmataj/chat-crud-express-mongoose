# chat-crud-express-mongoose

# 💬 Chat CRUD App using Express and MongoDB

A WhatsApp-style chat management system that supports full **CRUD operations** for chat messages using **Node.js**, **Express**, **MongoDB**, and **EJS** templating. This project simulates a simple web-based messaging interface for adding, viewing, editing, and deleting messages.

---

## 🚀 Project Features

- 📥 Add new chat messages (Sender → Receiver)
- 📃 View all existing messages
- ✏️ Edit/update any message
- ❌ Delete messages
- 🧩 Server-side rendered views using EJS
- 🗃️ Data stored in MongoDB using Mongoose

---

## 🛠️ Tech Stack

| Layer        | Technology           |
|--------------|-----------------------|
| Backend      | Node.js, Express.js   |
| Database     | MongoDB, Mongoose     |
| View Engine  | EJS                   |
| Middleware   | method-override       |

---

## 📁 Folder Structure
.
├── models/
│   └── chat.js          # Mongoose schema
├── views/
│   ├── index.ejs        # List view
│   ├── new.ejs          # New message form
│   └── edit.ejs         # Edit form
├── public/              # Static assets (if any)
├── index.js             # Express app entry
├── init.js              # Seeder script
├── package.json
└── README.md
