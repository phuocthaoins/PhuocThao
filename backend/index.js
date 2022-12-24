const express = require("express");
const cors = require("cors");
 
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
const port = 5000;
const databasePre = [
  { tenSP: "Bút Bi Thiên Long", gia: 5000, slBan: 100, noiban: "HCM"},
  { tenSP: "Tấm Pin Năng lượng MT", gia: 20000, slBan: 100, noiban: "HCM"},
  { tenSP: "Chuột máy tính", gia: 200, slBan: 100, noiban: "HCM" }
];

app.post("/get-data", (req, res) => {
  //2xx => thành công
  //4xx => có lỗi ở FE
  //5xx => có lỗi ở BE
  const database = []
    for (const object of databasePre) {
        database.push ({
            tenSP: object.tenSP,
            gia: object.gia,
            slBan: object.slBan,
            noiban: object.noiban,
            doanhthu: object.gia * object.slBan
        })
    }
  res.status(200).json(database);
});
 
app.post("/add-data", (req, res) => {
  const data = req.body;
  if (data) {
    databasePre.push(data);
  }

  const database = []
    for (const object of databasePre) {
        database.push ({
            tenSP: object.tenSP,
            gia: object.gia,
            slBan: object.slBan,
            noiban: object.noiban,
            doanhthu: object.gia * object.slBan
        })
    }
 
  res.status(200).json(database);
  
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 

