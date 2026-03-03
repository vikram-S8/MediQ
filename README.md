MediFlow

Inter-Department Workflow Automation System

📌 About the Project

MediFlow is a simple backend-based system that helps hospitals manage patient requests across different departments.

In many hospitals, requests like consultations, lab tests, or surgeries are handled manually, which leads to delays and confusion. This project solves that by creating a structured workflow where each request automatically moves from one department to another.

⚙️ How This Project Works

A patient creates a request

The request goes to Doctor

Then moves to Admin → Billing → Operation Theatre

Each department processes and forwards it

Finally, the request is completed

Everything is tracked in the system.

🛠️ Setup Instructions (Important)
1. Extract the Project

Download the ZIP file

Extract it to a folder like:

C:/MediFlow


<img width="495" height="685" alt="Screenshot 2026-03-03 192604" src="https://github.com/user-attachments/assets/e972f359-d275-4d51-87af-04caef877e2c" />


2. Open Project in Terminal

Go to the folder:

cd C:/MediFlow
3. Install Dependencies

Run:

npm install
4. Setup Database (MongoDB Compass)

Open MongoDB Compass

Create a new local database (example: mediflow)

Copy your MongoDB URI

Example:

mongodb://127.0.0.1:27017/mediflow
5. Configure Environment File

Open .env file and update:

MONGO_URI=your_mongodb_uri_here
JWT_SECRET=secretkey
6. Start the Server

Run:

npm run dev

You should see:


<img width="712" height="720" alt="image" src="https://github.com/user-attachments/assets/c84be394-6042-4dcc-88cb-d92a8bb7864f" />

Server running

DB Connected

👤 Create Users (Using Postman)

Open Postman and create users.

Register User
POST http://localhost:5000/api/auth/register
Body (JSON):
{
  "name": "Doctor1",
  "email": "doc@gmail.com",
  "password": "123",
  "role": "Doctor"
}

👉 Create users for:

Patient

Doctor

Admin

Billing

OT

🔐 Login
POST http://localhost:5000/api/auth/login

Use registered email & password.

You will get a token.

🌐 Run Frontend

Open the project folder

Open:

index.html


<img width="1898" height="898" alt="Screenshot 2026-03-03 193013" src="https://github.com/user-attachments/assets/e16d6d5f-bc7e-4736-8b41-691f0559d746" />



Login using credentials

Based on role, dashboard will open:

Dashboards:


Patient → Create request

Doctor → Approve

Admin → Verify

Billing → Process

OT → Complete

🔁 Workflow
Patient → Doctor → Admin → Billing → OT → Completed
📦 Tech Used

Node.js

Express.js

MongoDB

HTML, CSS, JavaScript

JWT Authentication

📈 Features

Role-based dashboards

Request tracking

Workflow automation

Secure login system

Simple and scalable

⚠️ Notes

Make sure MongoDB is running

Always start backend before frontend

Token is required for API requests

📞 Support

If you face any issues or have questions, feel free to contact.
chatgpt.com

🚀 Final Note

This project is built as a practical solution to improve hospital workflow management in a simple and efficient way.
