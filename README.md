# 📦 Online Inventory Management System (MERN Stack)

## 📌 Project Overview

This project is a **web-based Online Inventory Management System** developed using the **MERN Stack (MongoDB, Express.js, ReactJS, Node.js)**.

It helps a retail store or organization to:

* Manage products
* Track stock quantity
* Calculate total inventory value
* Perform basic inventory operations through a simple UI

This project is designed at **Day-0 level**, keeping the code **very easy, readable, and beginner-friendly**, while still following **real-world industry practices**.

---

## 🎯 Objectives

* To understand **full-stack web development** using MERN
* To implement **CRUD operations**
* To connect **React frontend with MongoDB backend**
* To build a **real-life inventory management use case**

---

## 🏗️ System Architecture

### 1️⃣ Frontend (ReactJS)

* Displays all products in **table format**
* Allows staff to:

  * Add new products
  * Update stock quantity
* Shows:

  * Product Name
  * Category
  * Price
  * Quantity
* Calculates **Total Inventory Value**
* Simple and clean UI (White + Light Blue theme)
* Communicates with backend using **REST APIs**

---

### 2️⃣ Backend (Node.js + Express.js)

Provides REST APIs:

* `GET /products` → Fetch all products
* `POST /product/add` → Add a new product
* `PUT /product/update/:id` → Update product quantity

#### Validation Rules:

* Quantity cannot be negative
* Required fields must be filled
* Default category and price handled safely

---

### 3️⃣ Database (MongoDB)

Stores:

* Product ID
* Product Name
* Category
* Price
* Quantity

MongoDB is connected using **Mongoose**.

---

## 🧩 React Component Structure

| Component           | Description             |
| ------------------- | ----------------------- |
| App                 | Main component & layout |
| ProductForm         | Add new products        |
| ProductList         | Display all products    |
| ProductCard / Table | Show product details    |
| Login               | Simple authentication   |

---

## 🔐 Authentication (Basic)

* Email must end with: `@kletech.ac.in`
* Password: `12345`

*(Added for academic demonstration purpose)*

---

## 🔄 Application Workflow

1. React app loads
2. Products are fetched from backend
3. Backend retrieves data from MongoDB
4. Products are displayed dynamically
5. User adds or updates stock
6. Database updates instantly
7. UI refreshes **without page reload**

---

## 🛠️ Technologies Used

* **Frontend:** ReactJS, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Tools:** VS Code, MongoDB Compass, GitHub

---

## ▶️ How to Run the Project

### 🔹 Prerequisites

* Node.js installed
* MongoDB installed (offline or Compass)
* VS Code

---

### 🔹 Backend Setup

```bash
cd backend
npm install
node server.js
```

Expected output:

```
Server running on port 5000
MongoDB connected
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Open browser:

```
http://localhost:3000
```

---

## 📊 Features Implemented

✅ Add products
✅ Update stock quantity
✅ Prevent negative stock
✅ Table view of inventory
✅ Total inventory value calculation
✅ MongoDB data persistence
✅ Simple authentication
✅ Beginner-friendly UI

---

## 📈 Real-Life Enhancements (Future Scope)

* Role-based login (Admin / Staff)
* Barcode scanning
* Supplier management
* Stock alerts (Low stock)
* Sales & purchase history
* Cloud deployment

---

## 📚 Academic Relevance

* Covers **WT + MERN Stack syllabus**
* Suitable for:

  * Lab submission
  * Case study
  * Mini project
  * Viva & internal assessment

---

## 👨‍💻 Developed By

**Name:** *Varun S Terdal*
**Course:** B.E / B.Tech
**Batch:** A2
**Subject:** Web Technologies

---

## ⭐ Conclusion

This project demonstrates how **ReactJS frontend**, **Node-Express backend**, and **MongoDB database** work together to build a real-world inventory system.
The focus is on **clarity, simplicity, and practical understanding**.

---

