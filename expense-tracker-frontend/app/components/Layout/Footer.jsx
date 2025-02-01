const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gray-200 dark:bg-gray-900">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
