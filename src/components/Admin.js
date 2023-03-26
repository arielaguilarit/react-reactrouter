import { Navigate } from 'react-router-dom';

const Admin = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <h2>Admin (Protected: authenticated {user.rol} required)</h2>;
};

export default Admin;
