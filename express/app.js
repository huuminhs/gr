const express = require('express');
const pgp = require('pg-promise')(/* options */);
const app = express();
const port = 3000;

// Connect to Postgres DB
const db = pgp('postgres://postgres:admin@localhost/gr1');

(async () => {
  try {
    const data = await db.any('SELECT * FROM users', [true]);
    console.log(data);
  } 
  catch (err) {
    console.log(err);
  }
})();



var list_of_post = [
  {
    "id": "1",
    "created_at": "2021-05-01T12:50:59.000Z",
    "title": "Chính chủ bán Vinhomes Ocean Park",
    "description": "Cần chuyển đi nên bán gấp",
    "seller": "Phạm Nhật Vượng",
    "size": 120,
    "address": "Vinhomes Ocean Park",
    "bedroom": 2,
    "phone_number": "0988886666"
  },
  {
    "id": "2",
    "created_at": "2021-05-01T12:50:59.000Z",
    "title": "Chính chủ bán Vinhomes Ocean Park",
    "description": "Oh great! I was wondering how every corporation I've ever given my email to was handling COVID-19",
    "seller": "SomebodyELse",
    "size": 33,
    "address": 10,
    "bedroom": 20,
    "phone_number": "0988886666"
  }
];

app.use(express.json());

app.all('/api', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization");
  next();
});

app.get('/api', (req, res, next) => {
  res.json(list_of_post);
  next();
});

app.post('/api', (req, res) => {
  list_of_post = [...list_of_post, 
    {...req.body, created_at: (new Date()).toJSON()}];
  res.send("POST request called");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
