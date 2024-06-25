// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change this to your actual domain for production
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Replace with your email
      pass: "your-password", // Replace with your password
    },
  });

  // Setup email data
  let mailOptions = {
    from: "your-email@gmail.com", // sender address
    to: "sahardirani2004@gmail.com", // recipient
    subject: `New Contact Message from ${name}`, // Subject line
    text: message, // plain text body
    html: `<p>${message}</p>`, // html body (if you want to send HTML formatted emails)
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res.status(500).send("Error occurred, unable to send email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
