const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route
app.post("/api/sell-device", upload.array("images"), async (req, res) => {

  const data = req.body || {};
  const files = req.files || [];

  console.log("FILES:", files);
  console.log("BODY:", req.body);
console.log("FILES:", req.files);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mongia.prathamkv@gmail.com",
      pass: "kzgu eiwl lebz fder"
    }
  });

  const mailOptions = {
    from: "mongia.prathamkv@gmail.com",
    to: "mongia.prathamkv@gmail.com",
    subject: "New Laptop Sell Request - Pratham Computech",

    html: `
    <h2>New Laptop Sell Request</h2>

    <h3>Customer Details</h3>
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>

    <h3>Basic Information</h3>
    <p><b>Brand:</b> ${data.brand}</p>
    <p><b>Type:</b> ${data.type}</p>

    <h3>Performance</h3>
    <p><b>Processor:</b> ${data.processor}</p>
    <p><b>RAM:</b> ${data.ram}</p>
    <p><b>Storage:</b> ${data.storage}</p>
    <p><b>GPU:</b> ${data.gpu}</p>

    <h3>Display</h3>
    <p><b>Screen Size:</b> ${data.screenSize}</p>
    <p><b>Resolution:</b> ${data.resolution}</p>
    <p><b>Touch:</b> ${data.touchscreen}</p>
    <p><b>Display Type:</b> ${data.displayType}</p>

    <h3>Condition</h3>
    <p><b>Physical:</b> ${data.physicalCondition}</p>
    <p><b>Keyboard:</b> ${data.keyboardCondition}</p>
    <p><b>Trackpad:</b> ${data.trackpadCondition}</p>
    <p><b>Screen:</b> ${data.screenCondition}</p>

    <h3>Battery</h3>
    <p><b>Health:</b> ${data.batteryHealth}</p>
    <p><b>Backup:</b> ${data.batteryBackup}</p>
    <p><b>Battery Replaced:</b> ${data.batteryReplaced}</p>

    <h3>Accessories</h3>
    <p><b>Charger:</b> ${data.charger}</p>
    <p><b>Box:</b> ${data.box}</p>
    <p><b>Bill:</b> ${data.bill}</p>
    <p><b>Warranty:</b> ${data.warranty}</p>

    <h3>Upgrades</h3>
    <p><b>RAM Upgrade:</b> ${data.ramUpgrade}</p>
    <p><b>SSD Upgrade:</b> ${data.ssdUpgrade}</p>
    <p><b>Battery Upgrade:</b> ${data.batteryUpgrade}</p>
    <h3>Uploaded Images</h3>
<p><b>Google Drive Link With Laptop Images:</b> 
<a href="${data.driveLink}" target="_blank">
${data.driveLink || "Not Provided"}
</a>
</p>

    <hr/>
    <p>This email was generated from Pratham Computech website</p>
    `,

    attachments: files && files.length > 0
      ? files.map(file => ({
          filename: file.originalname,
          path: file.path
        }))
      : []
  };

  try {

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

    res.send("Email Sent");

  } catch (error) {

    console.log(error);
    res.status(500).send("Error");

  }

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});