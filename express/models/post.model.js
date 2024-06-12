const db = require('../utils/database')

class Post {
    getAllPosts () {
        return db.any('SELECT * FROM posts', [true]);
    }

    getPost (id) {
        return db.any(`SELECT * FROM posts WHERE post_id = ${id} `, [true])
    }

    async searchPost (str) {
        // Convert input string to lowercase
        const lowerCaseInput = str.toLowerCase();
        
        // Construct the search pattern for SQL query
        const searchPattern = `%${lowerCaseInput.split(' ').join('%')}%`;
        
        // SQL query to search for titles containing the words in the input string
        const query = `
            SELECT * FROM posts
            WHERE LOWER(title) LIKE $1
        `;
        
        // Execute the query
        const results = await db.any(query, searchPattern);
        
        return results;
    }

    createPost (data_obj, username) {
        const insertQuery = `
            INSERT INTO posts(title, description, price, seller, phone_number, size, address, bedroom, bathroom, type, img_url, province, district, ward, username)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
            RETURNING *;
            `;
        return db.one(insertQuery, [
            data_obj.title,
            data_obj.description,
            data_obj.price,
            data_obj.seller,
            data_obj.phone_number,
            data_obj.size,
            data_obj.address,
            data_obj.bedroom,
            data_obj.bathroom,
            data_obj.type,
            data_obj.img_url,
            data_obj.province,
            data_obj.district,
            data_obj.ward,
            username
        ])
    }
}

module.exports = Post