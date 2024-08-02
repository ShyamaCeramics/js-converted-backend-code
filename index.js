// src/index.js
const express = require('express');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const Sequelize = require("sequelize");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('routes'))

const port = process.env.PORT || 9000;

let sequelize = new Sequelize({
  host: "mysql8010.site4now.net",
  database: "db_aa9fb2_sha",
  username: "aa9fb2_sha",
  password: "Fake@123456",
  dialect: "mysql"
});

// DB Connection test
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

// API Routes
app.use('/', (req, res) => {
  res.json({ message: 'Hello from shyama app' });
});
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
