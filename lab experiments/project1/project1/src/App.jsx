import { useState } from 'react';
import ProfileCard from './ProfileCard';
import StatusPanel from './StatusPanel';
import './App.css';


function App() {
  const [user, setUser] = useState({
    name: 'Gowtham',
    role: 'Developer',
    status: 'Active',
  });

  const updateStatus = (newStatus) => {
    setUser((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="dashboard">
      <h1>Profile Dashboard</h1>
      <ProfileCard user={user} />
      <StatusPanel status={user.status} onStatusChange={updateStatus} />
    </div>
  );
}

export default App;