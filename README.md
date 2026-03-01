🏥 MediQ – Inter-Department Workflow Automation System

MediQ is a backend-driven workflow automation system designed to manage and track patient requests across multiple hospital departments in a structured, transparent, and efficient way.

It replaces manual coordination with an automated workflow engine, improving communication, reducing delays, and enhancing patient care.

📌 Problem Statement

Traditional hospital systems suffer from:

❌ Manual request handling

❌ No real-time tracking

❌ Poor inter-department coordination

❌ Lack of transparency for patients

❌ Delays in processing

💡 Solution

MediQ introduces a workflow-based system that:

Automates request movement across departments

Tracks status and current stage

Provides real-time progress visibility

Ensures accountability at every step

🔄 Workflow

Each request follows a predefined path:

Patient → Doctor → Admin → Billing → OT → Completed
✨ Features
🔹 Core Features

Patient request creation

Automated workflow routing

Role-based dashboards

JWT-based authentication

Status & stage tracking

Progress tracking (%)

🔹 Advanced Features

Dynamic workflow engine

Stage-wise request movement

Department-based filtering

Visual tracking (✔ ➡ ⬜ stages)

Secure API architecture

🛠️ Technology Stack
🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

🔹 Frontend

HTML5

CSS (basic styling)

JavaScript (Vanilla JS for API integration)

🧱 System Architecture
Frontend (Dashboard UI)
        ↓
Express API Server
        ↓
Workflow Engine Logic
        ↓
MongoDB Database
🔗 API Endpoints
🔐 Authentication

POST /api/auth/register – Register user

POST /api/auth/login – Login & receive token

📌 Requests

POST /api/requests/create – Create request

GET /api/requests/my – Get patient requests

GET /api/requests/role/:role – Role-based requests

PUT /api/requests/forward/:id – Forward request

PUT /api/requests/next/:id – Move to next stage

PUT /api/requests/schedule/:id – Schedule operation

👥 Role-Based Access
👤 Patient

Create requests

Track status and progress

👨‍⚕️ Doctor

Review requests

Forward to Admin/Lab

🧑‍💼 Admin

Verify requests

Approve workflow progression

💰 Billing

Process financial details

Generate final report

🏥 OT (Operation Theatre)

Schedule operations

Mark completion

🗄️ Database Design

Each request contains:

Patient details

Request type & priority

Workflow stages

Current stage

Status

Stage index

Created user reference

Scheduled time

🚀 Getting Started
🔧 Prerequisites

Node.js installed

MongoDB running

📥 Installation
git clone https://github.com/your-username/mediq.git
cd mediq
npm install
▶️ Run Server
node server.js
🌐 Open Frontend

Open HTML files manually in browser:

frontend/index.html
🔐 Authentication

All protected routes require:

Authorization: Bearer <token>
📈 Future Enhancements

🔔 Real-time notifications (Socket.io)

📊 Analytics dashboard

🤖 AI-based bottleneck detection

📱 Mobile app

📄 PDF report generation

🎯 Key Advantages

✅ Reduces manual workload

✅ Improves transparency

✅ Faster request processing

✅ Better coordination

✅ Scalable architecture

📌 Conclusion

MediQ transforms hospital operations into a smart, automated workflow system.

It improves efficiency, transparency, and patient experience through structured request management and real-time tracking.

👨‍💻 Author

Vikram S
Backend & System Developer



<img width="373" height="858" alt="Screenshot 2026-03-01 094228" src="https://github.com/user-attachments/assets/9c943182-a90e-4f43-934a-816b8d812440" />


<img width="333" height="250" alt="Screenshot 2026-03-01 094243" src="https://github.com/user-attachments/assets/84c8df5b-fd95-4153-af04-889429ccda64" />


<img width="1920" height="1080" alt="Screenshot (215)" src="https://github.com/user-attachments/assets/beb1a7f5-68e8-4cce-9e2d-b624875df578" />

<img width="1920" height="1080" alt="Screenshot (216)" src="https://github.com/user-attachments/assets/085a11d5-0493-46a6-ae07-be91ead2a8b9" />



<img width="1294" height="890" alt="Screenshot 2026-03-02 000023" src="https://github.com/user-attachments/assets/0fcb85ee-f34b-4b37-84e9-8da59147435f" />

