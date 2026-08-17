const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:5173",
    "https://ai-interview-preparation-web-page.vercel.app"
]

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow requests with no origin
            // Example: Postman/server-to-server
            if (!origin) {
                return callback(null, true)
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true)
            }

            return callback(new Error("Not allowed by CORS"))
        },

        credentials: true
    })
)

const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app
