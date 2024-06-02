const { db } = require('../utils/database')

async function getAllPosts (req, res) {
    try {
        const data = await db.any('SELECT * FROM posts', [true])
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function getPost (req, res) {
    try {
        const data = await db.any(`SELECT * FROM posts WHERE post_id = ${req.params.id} `, [true])
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function createPost (req, res) {
    const insertQuery = `
    INSERT INTO posts(title, description, price, seller, phone_number, size, address, bedroom, bathroom, type, img_url, province, district, ward, username)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *;
    `;
    try {
        const data = await db.one(insertQuery, [
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
            req.body.ward,
            req.user.username
          ])
        console.log('Data inserted successfully:', data)
    }
    catch (error) {
        console.error('Error inserting data:', error)
    }
    res.send("POST request called");
}

module.exports = { createPost, getPost, getAllPosts }