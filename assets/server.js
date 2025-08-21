
import express from "express";
import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

app.post("/send-message", (req, res) => {
  try {
    const { email_address, message } = req.body;

    if (!email_address || !message) {
      return res
        .status(400)
        .send("<script>alert('Missing email or message'); history.back();</script>");
    }

    const fileName = path.join(dataDir, "messages.xlsx");

    let rows = [];
    if (fs.existsSync(fileName)) {
      const wb = XLSX.readFile(fileName);
      const ws = wb.Sheets[wb.SheetNames[0]];
      rows = XLSX.utils.sheet_to_json(ws);
    }

     rows.push({
      Email: email_address,
      Message: message,
      Date: new Date().toLocaleString()
    });

    const newWB = XLSX.utils.book_new();
    const newWS = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(newWB, newWS, "Messages");
    XLSX.writeFile(newWB, fileName);

      res.send(
      `<script>alert('Thanks! Your message has been received.'); window.location.href="/";</script>`
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("<script>alert('Server error'); history.back();</script>");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post("/send-message", (req, res) => {
  try {
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});