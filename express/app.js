const express = require('express');
const pgp = require('pg-promise')(/* options */);
const jwt = require('jsonwebtoken')
const config = require('./utils/config')
const cors = require('cors');
const app = express();
const { db } = require('./utils/database')
const postRouter = require('./routes/post.route')

app.use(express.json());
app.use(cors());

// Login endpoint
app.post('/login', (req, res) => {
  const data = req.body;
  const accessToken = jwt.sign(data, 'bachkhoa', {
    expiresIn: '60s',
  });
  res.json({ accessToken });
})

app.post('/token-test', (req, res) => {
  var decoded = jwt.verify(req.body.accessToken, 'bachkhoa');
  res.json({decoded});
});

app.use('/api/post', postRouter)

// ----------------------------------------
app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
})
