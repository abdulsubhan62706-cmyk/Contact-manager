# 📇 Contact Manager API

A RESTful Contact Manager API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts.

---

## 🚀 Features

- Create a new contact
- View all contacts
- Update an existing contact
- Delete a contact
- MongoDB database integration
- RESTful API design
- Environment variable support using dotenv
- Auto-reload during development with Nodemon

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## 📂 Project Structure

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── contactController.js
│
├── models/
│   └── Contact.js
│
├── routes/
│   └── contactRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd Contact-Manager/backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/contactDB
```

### 5. Start MongoDB

Make sure MongoDB Server is running.

### 6. Run the project

```bash
npm run dev
```

Server runs at:

```
http://127.0.0.1:5000
```

---

# 📌 API Endpoints

## Get All Contacts

**GET**

```
/api/contacts
```

### Response

```json
[
  {
    "_id": "...",
    "name": "Abdul",
    "email": "abdul@gmail.com",
    "phone": "9876543210"
  }
]
```

---

## Create Contact

**POST**

```
/api/contacts
```

### Request Body

```json
{
  "name": "Abdul",
  "email": "abdul@gmail.com",
  "phone": "9876543210"
}
```

---

## Update Contact

**PUT**

```
/api/contacts/:id
```

### Request Body

```json
{
  "name": "Abdul Subhan",
  "email": "abdul@gmail.com",
  "phone": "9999999999"
}
```

---

## Delete Contact

**DELETE**

```
/api/contacts/:id
```

### Response

```json
{
  "message": "Contact deleted successfully"
}
```

---

# 🧪 Testing

The API can be tested using:

- Postman
- Thunder Client
- Insomnia

---

# 📸 Sample Contact Document

```json
{
  "_id": "6a6a2fd353acf227cbe8fb4c",
  "name": "Abdul",
  "email": "abdul@gmail.com",
  "phone": "9876543210",
  "createdAt": "2026-07-29T16:52:35.179Z",
  "updatedAt": "2026-07-29T16:52:35.179Z",
  "__v": 0
}
```

---

# 📖 Learning Outcomes

Through this project, I learned:

- Building REST APIs using Express.js
- Connecting Node.js with MongoDB using Mongoose
- Creating Mongoose Schemas and Models
- Using Controllers and Routes
- CRUD Operations
- Environment Variables
- Error Handling
- Testing APIs using Postman
- Organizing a backend project using MVC architecture

---

# 🔮 Future Improvements

- JWT Authentication
- User Registration & Login
- Password Hashing (bcrypt)
- Search Contacts
- Pagination
- React Frontend
- Deploy Backend on Render
- Deploy Frontend on Vercel

---

# 👨‍💻 Author

**Abdul Subhan**

GitHub: https://github.com/abdulsubhan62706-cmyk

---

## ⭐ If you found this project useful, consider giving it a star!
