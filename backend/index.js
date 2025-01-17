const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173" || process.env.FRONTEND_URL_HEROKU,
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "🦘" });
});

// serve all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// receive email from frontend React form
// don't forget to set creds in heroku config!
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
