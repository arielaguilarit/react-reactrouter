import { Navigate } from 'react-router-dom';

const Service = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <h2>Service (Protected: authenticated {user.rol} required)</h2>
    </>
  );
};

export default Service;
