# 🛒 App CRUD

CRUD application built with **Vue 3 (TypeScript)** for frontend and **Node.js + Express + PostgreSQL** for backend.

---

## 🚀 Features

* Create, Read, Update, Delete (CRUD) Products
* REST API with Express
* PostgreSQL database
* Vue 3 Composition API + TypeScript
* Clean component structure

---

## 🧱 Tech Stack

* Frontend: Vue 3 + Vite + TypeScript
* Backend: Node.js + Express
* Database: PostgreSQL

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd <your-repo>
```

---

## 🖥️ Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=products_db
DB_PORT=5432
```

### Run Backend

```bash
npm run dev
```

---

## 🗄️ Database Setup

```sql
CREATE DATABASE products_db;

\c products_db;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL
);
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Get all products  |
| GET    | /api/products/:id | Get product by ID |
| POST   | /api/products     | Create product    |
| PUT    | /api/products/:id | Update product    |
| DELETE | /api/products/:id | Delete product    |

---

## 👨‍💻 Author

Haida Khoirurrosyid
