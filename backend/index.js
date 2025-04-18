const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();

const MYGMAIL = process.env.EMAIL;
const PASS = process.env.PASS;

// console.log(MYGMAIL);
// console.log(PASS);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.mattdev.it/",
      "https://mattdev.it",
    ],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "🦘" });
});

// receive email from frontend React form
// don't forget to set creds in heroku config!
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received email request:", { name, email, message });

  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      debug: true,
      logger: true,
      auth: {
        user: MYGMAIL,
        pass: PASS,
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
    console.error("Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// serve all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
