const mongoose = require('mongoose');
const Expense = require('../models/Expense');

exports.getSpendingInsights = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const insights = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
        },
      },
      {
        $project: {
          category: '$_id',
          total: 1,
          _id: 0,
        },
      },
    ]);

    const totalSpending = insights.reduce((acc, item) => acc + item.total, 0);
    const insightsWithPercentage = insights.map((item) => ({
      category: item.category,
      total: item.total,
      percentage: totalSpending ? ((item.total / totalSpending) * 100).toFixed(2) : 0,
    }));

    res.json(insightsWithPercentage);
  } catch (error) {
    console.error('Insights Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
