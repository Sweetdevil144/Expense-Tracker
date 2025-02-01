import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/dashboard.png" alt="Dashboard" className="w-6 h-6" />
          <span className="font-bold text-xl">Dashboard</span>
        </Link>
        <Link href="/expense/new" className="flex items-center space-x-2">
          <img src="/expense.png" alt="New Expense" className="w-6 h-6" />
          <span>Add Expense</span>
        </Link>
        <Link href="/insights" className="flex items-center space-x-2">
          <img src="/insights.png" alt="Insights" className="w-6 h-6" />
          <span>Insights</span>
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
