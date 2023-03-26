import { Navigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <h2>Dashboard (Protected: authenticated {user.rol} required)</h2>
    </>
  );
};

export default Dashboard;
