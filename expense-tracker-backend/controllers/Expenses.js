const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
  try {
    const { amount, category, date, description } = req.body;
    const newExpense = new Expense({
      user: req.user.id,
      amount,
      category,
      date,
      description,
    });
    await newExpense.save();
    res.status(201).json({ message: 'Expense created', expense: newExpense });
  } catch (error) {
    console.error('Create Expense Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { page = 1, limit = 10, startDate, endDate, category } = req.query;
    const query = { user: req.user.id };

    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    if (category) {
      query.category = category;
    }

    const expenses = await Expense.find(query)
      .skip((page - 1) * Number(limit))
      .limit(Number(limit))
      .sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    console.error('Get Expenses Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const expense = await Expense.findOne({ _id: expenseId, user: req.user.id });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    const { amount, category, date, description } = req.body;
    expense.amount = amount !== undefined ? amount : expense.amount;
    expense.category = category !== undefined ? category : expense.category;
    expense.date = date !== undefined ? date : expense.date;
    expense.description = description !== undefined ? description : expense.description;
    await expense.save();
    res.json({ message: 'Expense updated', expense });
  } catch (error) {
    console.error('Update Expense Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const expense = await Expense.findOneAndDelete({ _id: expenseId, user: req.user.id });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted' });
  } catch (error) {
    console.error('Delete Expense Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
