import { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');

  const handleApplyFilters = () => {
    // Pass filter values to parent component (e.g., ExpenseList)
    onFilterChange({ startDate, endDate, category });
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded mb-4">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="startDate" className="block mb-1">Start Date</label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 border rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-1">End Date</label>
          <input
            type="date"
            id="endDate"
            className="w-full p-2 border rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">Category</label>
          <input
            type="text"
            id="category"
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Food, Travel"
          />
        </div>
      </div>
      <button onClick={handleApplyFilters} className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
