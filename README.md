# 🤖 AI Interview Preparation Platform

An AI-powered web application designed to help users prepare for technical interviews through personalized interview practice and AI-generated feedback.

The application provides user authentication, interview preparation, AI-powered interview generation, and interview reports.

---

## 🚀 Features

- 🔐 User Registration & Login
- 👤 User Authentication with JWT
- 🍪 Secure Cookie-Based Authentication
- 🤖 AI-Powered Interview Generation
- 📝 Personalized Interview Questions
- 📊 AI-Generated Interview Reports
- 📄 File Upload Support
- 🔒 Protected Routes
- 🗄️ MongoDB Database
- ⚡ React + Vite Frontend
- 🚀 Node.js + Express Backend
- 🌐 REST API Architecture

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Sass

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Puppeteer
- Zod
- Google GenAI

---

## 📁 Project Structure

```text
interview-ai-yt-main/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── Frontend/
    ├── public/
    ├── src/
    │   ├── features/
    │   │   ├── auth/
    │   │   └── interview/
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js


⚙️ Installation
1. Clone the repository
git clone https://github.com/Aryabardhansinghchauhan/ai-INTERVIEW-preparation-web-page-.git
2. Move into the project
cd ai-INTERVIEW-preparation-web-page-

 🔧 Backend Setup
       1. Navigate to Backend
          cd interview-ai-yt-main/Backend
       2. Install dependencies
          npm install
       3. Create .env
          Create a .env file inside the Backend directory:
            GOOGLE_GENAI_API_KEY=your_google_genai_api_key
            MONGO_URI=your_mongodb_connection_string
            JWT_SECRET=your_jwt_secret
            PORT=3000
        4. Start the backend
           For development:
              npm run dev
           For production:
              npm start

🌐 Deployment
Backend
The backend is deployed using Render.
Backend
   ↓
Render
   ↓
https://ai-interview-preparation-web-page-2.onrender.com

Frontend
The frontend can be deployed using Vercel.
Recommended Vercel configuration:
Root Directory:
interview-ai-yt-main/Frontend
Build Command:
npm run build
Output Directory:
dist

🧪 Development
Start the backend:
cd Backend
npm run dev
Start the frontend in another terminal:
cd Frontend
npm run dev

📌 Future Improvements
🎤 Voice-based interview practice
📈 Advanced performance analytics
💬 Real-time AI interview conversations
🎯 Personalized learning recommendations
📚 More interview categories
🌙 Dark mode
📱 Improved mobile responsiveness

👨‍💻 Author
Aryabardhan Singh Chauhan
GitHub: https://github.com/Aryabardhansinghchauhan
