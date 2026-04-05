# Vue Fullstack Practice 🚀

A full-stack practice project built with **Vue.js (frontend)** and **Node.js + Express + MongoDB (backend)**.
This repository is meant for learning, experimentation, and building real-world full-stack workflows.

---

## 🧩 Tech Stack

### Frontend

* Vue.js (Vite)
* Vue Components
* Scoped CSS
* Axios (API communication)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* REST APIs

### Tools

* Git & GitHub
* npm
* VS Code

---

## 📁 Project Structure

```bash
vue_fullstack/
│
├── backend/
│   ├── config/          # DB & environment configuration
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── index.js         # Server entry point
│   └── package.json
│
├── frontend/
│   └── vue-app/
│       ├── src/         # Vue source files
│       ├── public/
│       └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Nawinchander/Vue_Fullstack_Pract.git
cd vue_fullstack
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend/vue-app
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Connection

Make sure your backend API base URL is correctly set in the frontend (Axios or fetch).

Example:

```js
axios.get('http://localhost:5000/api/example')
```

---

## 🛑 Git Rules (Important)

The following files/folders are **ignored** and should never be pushed:

* `node_modules/`
* `.env`
* `dist/`

Handled using `.gitignore` ✔️

---

## 🎯 Learning Goals

* Understand Vue component structure
* Build REST APIs with Express
* Connect Vue frontend with Node backend
* Work with MongoDB & Mongoose
* Follow clean Git practices
* Structure real-world full-stack apps

---

## 🚧 Project Status

🟡 In Progress — continuously improving and experimenting.
