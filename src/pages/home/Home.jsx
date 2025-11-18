import React from "react";
import "./Home.css"; // For dashboard styles

function Home() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">Your financial overview</p>

      <div className="dashboard-cards">
        <div className="dashboard-card income">
          <span>Income</span>
          <h2>$6,200</h2>
        </div>
        <div className="dashboard-card expenses">
          <span>Expenses</span>
          <h2>$551</h2>
        </div>
        <div className="dashboard-card budget">
          <span>Budget</span>
          <h2>$1,600</h2>
        </div>
        <div className="dashboard-card savings">
          <span>Savings</span>
          <h2>$5,649</h2>
        </div>
      </div>

      <div className="dashboard-summary">
        <h3>Expenses by Category</h3>
        {/* Example placeholder for chart */}
        <div className="pie-chart-placeholder">[Pie Chart Here]</div>
        <h3>Budget vs Spending</h3>
        <div className="bar-chart-placeholder">[Bar Chart Here]</div>
        <div className="quick-summary">
          <div>Net Income <span>$5649</span></div>
          <div>Budget Used <span>76.4%</span></div>
          <div>Transactions <span>10</span></div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="dashboard-nav">
        <button>Home</button>
        <button>Transactions</button>
        <button>Budgets</button>
        <button>Reports</button>
        <button>Settings</button>
      </nav>
    </div>
  );
}

export default Home;
