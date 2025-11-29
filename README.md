Finance Tracker Backend (Node.js + Express + PostgreSQL)

This is the backend API for the Personal Finance Tracker — an industry-style full-stack project built using:

Node.js & Express

PostgreSQL (Relational Database)

REST API Architecture

Render / Local Environment Support

🚀 Features

Add new income & expense transactions

Fetch all transactions

Delete transactions

PostgreSQL-based persistent storage

Clean folder structure and modular routes

Validation + Error-handling

CORS enabled for frontend connection

🛠️ Tech Stack
Layer	Technology
Backend	Node.js, Express.js
Database	PostgreSQL
ORM	pg (node-postgres)
Env Config	dotenv
Deployment	Render (optional)
📁 Folder Structure
finance-backend/
│── db/
│   └── index.js
│── routes/
│   └── transactions.js
│── server.js
│── package.json
│── .env.example

🔌 API Endpoints
Base URL:

http://localhost:5000/api/transactions

➕ Add Transaction

POST /add

Request Body:

{
  "type": "income",
  "amount": 5000,
  "category": "Salary"
}

📥 Get All Transactions

GET /

Response:

{
  "success": true,
  "data": [...]
}

❌ Delete Transaction

DELETE /:id

🗄️ SQL Table (create this table in PostgreSQL)
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  type VARCHAR(10) NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  category VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

▶️ Run Locally
1. Install dependencies
npm install

2. Create .env
PORT=5000
PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=your_password
PG_DATABASE=finance_db
PG_PORT=5432

3. Start server
node server.js

🎯 Status

✔ Completed
✔ Tested using Postman
✔ Ready for deployment
