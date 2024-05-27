const express = require('express');
const pgp = require('pg-promise')(/* options */);
const app = express();
const port = 3000;

// Connect to Postgres DB
const db = pgp('postgres://postgres:admin@localhost/gr1');

app.use(express.json());

app.all('/api/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization");
  next();
});

const insertQuery = `
    INSERT INTO posts(title, description, price, seller, phone_number, size, address, bedroom, bathroom, type, img_url, province, district, ward)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
`;

app.get('/api/get-post', (req, res) => {
  db.any('SELECT * FROM posts', [true])
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.post('/api/new-post', (req, res) => {
  db.one(insertQuery, [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.seller,
    req.body.phone_number,
    req.body.size,
    req.body.address,
    req.body.bedroom,
    req.body.bathroom,
    req.body.type,
    req.body.img_url,
    req.body.province,
    req.body.district,
    req.body.ward
  ])
    .then(data => {
        console.log('Data inserted successfully:', data);
    })
    .catch(error => {
        console.error('Error inserting data:', error);
    });
  res.send("POST request called");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
