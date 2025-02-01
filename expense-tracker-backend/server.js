require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/connect');

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/Auth');
const expenseRoutes = require('./routes/Expenses');
const insightsRoutes = require('./routes/Insights');

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/insights', insightsRoutes);

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
