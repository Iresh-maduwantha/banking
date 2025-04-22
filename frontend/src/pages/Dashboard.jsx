import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/main.css';

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-content">
          <h1 className="dashboard-title">Welcome to your Dashboard</h1>
          <p className="dashboard-subtitle">Manage your banking activities and transactions</p>
        </div>
        <div className="dashboard-header-actions">
          <span className="user-email">{user?.email}</span>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Account Balance</h2>
          </div>
          <div className="text-center">
            <h3 className="dashboard-title">$25,000.00</h3>
            <p className="dashboard-subtitle">Available Balance</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Transactions</h2>
          </div>
          <div className="text-center">
            <p className="dashboard-subtitle">No recent transactions</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2">
            <button className="btn btn-primary">Transfer Money</button>
            <button className="btn btn-secondary">Pay Bills</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

