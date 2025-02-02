# Files

```bash
.
├── app
│   ├── layout.js               // Global layout (wraps your pages, applies theme provider, etc.)
│   ├── page.js                 // Landing/Dashboard page
│   ├── login
│   │   └── page.js             // Login page
│   ├── register
│   │   └── page.js             // Registration page
│   ├── expense
│   │   ├── new
│   │   │   └── page.js         // Create new expense page
│   │   └── [id]
│   │       └── page.js         // Edit expense page (dynamic route)
│   └── insights
│       └── page.js             // Insights page (could be integrated in dashboard)
├── components
│   ├── Auth
│   │   ├── LoginForm.jsx       // Login form component
│   │   └── RegisterForm.jsx    // Registration form component
│   ├── Dashboard
│   │   ├── ExpenseList.jsx     // List of expenses with pagination and filters
│   │   ├── InsightsChart.jsx   // Chart component using Chart.js (or react-chartjs-2)
│   │   └── Filters.jsx         // Filter controls component (date range, category)
│   ├── ExpenseForm.jsx         // Form for adding/editing an expense
│   ├── Layout
│   │   ├── Header.jsx          // Header with navigation and theme toggle
│   │   └── Footer.jsx          // Footer component (if needed)
│   └── ThemeToggle.jsx         // Button/component to switch between light & dark modes
├── public
│   ├── icons
│   │   ├── dashboard.svg
│   │   ├── expense.svg
│   │   ├── edit.svg
│   │   ├── delete.svg
│   │   ├── insights.svg
│   │   ├── dark-mode.svg
│   │   └── light-mode.svg
│   └── favicon.ico             // Favicon and other public assets
├── styles
│   └── globals.css             // Global CSS file (already set up for Tailwind)
├── .eslintrc.json              // ESLint config (generated by create-next-app)
├── package.json
└── next.config.js
```
