const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '69apples',
  database: 'lead_management',
  connectionLimit: 10, // Adjust the limit as per your requirements
});

// Export the pool to be used in other modules
module.exports = pool.promise();
