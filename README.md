MediQ

Inter-Department Workflow Automation System

📌 About the Project

MediFlow is a simple backend-based system that helps hospitals manage patient requests across different departments.

In many hospitals, requests like consultations, lab tests, or surgeries are handled manually, which leads to delays and confusion. This project solves that by creating a structured workflow where each request automatically moves from one department to another.

⚙️ How This Project Works

1️⃣ User Authentication

The system begins with user authentication.

Each hospital staff member logs in using their credentials. Authentication is handled using JWT (JSON Web Tokens).

Users are assigned roles such as:

Patient

Doctor

Admin

Billing

Operation Theatre (OT)

These roles determine which dashboard and permissions the user receives.

2️⃣ Patient Creates a Request

The workflow starts when a patient submits a medical request.

Examples of requests include:

Consultation

Surgery

Lab Test

Medical Procedure

The request is stored in the MongoDB database with an initial stage assigned to the Doctor department.

Example database record:

{
  "patientName": "Rahul",
  "requestType": "Surgery",
  "stage": "Doctor",
  "status": "Pending"
}
3️⃣ Doctor Reviews the Request

The Doctor dashboard displays all requests assigned to the Doctor stage.

The doctor can:

Review patient details

Approve the request

Forward the request to the Admin department

Once approved, the system automatically updates the request stage.

Doctor → Admin
4️⃣ Admin Verifies the Request

The Admin department verifies the request.

This may include:

Checking patient records

Confirming hospital availability

Validating documentation

After verification, the admin forwards the request to the Billing department.

Admin → Billing
5️⃣ Billing Processes Payment

The Billing department handles financial processing.

Tasks include:

Generating invoices

Confirming payments

Updating billing status

Once payment is processed, the request is forwarded to the Operation Theatre (OT).

Billing → OT
6️⃣ Operation Theatre Completes the Request

The Operation Theatre department handles the final stage of the workflow.

Responsibilities include:

Scheduling operations

Performing medical procedures

Updating completion status

After the procedure is completed, the request status is updated to:

Completed
7️⃣ Workflow Tracking

Every request contains a stage field that indicates its current department.

Example stages:

Doctor
Admin
Billing
OT
Completed

This allows the system to:

Track request progress

Display requests in department dashboards

Maintain workflow transparency

8️⃣ Role-Based Dashboards

Each user sees only the requests relevant to their role.

Role	Responsibility
Patient	Create and track requests
Doctor	Review and approve requests
Admin	Verify and authorize requests
Billing	Process payments
OT	Complete the operation

This ensures secure and organized workflow management.

🔁 Complete Workflow
Patient → Doctor → Admin → Billing → Operation Theatre → Completed

Each department processes the request and moves

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

📈 The system can be extended with advanced features such as:

Real-time notifications between departments

Drag-and-drop workflow board (Kanban style)

AI-based patient prioritization

Hospital analytics dashboard

Appointment scheduling system

Integration with Electronic Health Records (EHR)

⚠️ Notes

Make sure MongoDB is running

Always start backend before frontend

Token is required for API requests

📞 Support

If you face any issues or have questions, feel free to contact.

chatgpt.com

🚀 Final Note

This project is built as a practical solution to improve hospital workflow management in a simple and efficient way.
