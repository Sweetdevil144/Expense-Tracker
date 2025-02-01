import './globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export const metadata = {
  title: 'Expense Tracker',
  description: 'A minimalist expense tracker with insights.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
