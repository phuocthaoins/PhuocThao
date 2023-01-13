const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");


//import library 
const { checkLogin } = require("./middleware");

// import constant
const { JWTKEY } = require("./constant");

//create instance
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
const port = 5000;
const users = [
  {
    id: 1,
    username: "tu",
    name: "Nguyễn Ngọc Tú",
    role: "admin",
    password: "123456",
  },
  {
    id: 2,
    username: "thao",
    name: "Nông Phước Thảo",
    role: "user",
    password: "123456",
  },
  {
    id: 3,
    username: "admin",
    name: "ADMIN",
    role: "admin",
    password: "123456",
  },
];
const databasePre = [
  { tenSP: "Bút Bi Thiên Long", gia: 5000, slBan: 100, noiban: "HCM"},
  { tenSP: "Tấm Pin Năng lượng MT", gia: 20000, slBan: 100, noiban: "HCM"},
  { tenSP: "Chuột máy tính", gia: 200, slBan: 100, noiban: "HCM" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.filter(
    (value, index) => value.username === username && value.password === password
  );

  if (user.length !== 1) {
    res.status(400).json({
      message: "Invalid user or password",
    });
  } else {
    let token = jwt.sign(
      {
        username: user[0].username,
        role: user[0].role,
      },
      JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ jwt: token });
  }
});

app.post("/get-profile", checkLogin, (req, res) => {
  console.log({ decoded: req.decoded});
  const { username, role } = req.decoded;
  if (role === "admin") {
    res.status(200).json({ profile: users });
  } else {
    const user = users.filter((value, index) => value.username === username);
    res.status(200).json({ profile: user });
  }
});

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
 

