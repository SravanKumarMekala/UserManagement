import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import UserContext from '../context/UserContext.js';

function UserDetail() {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Company: {user.company.name}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Link to="/">Go Back</Link>
      </CardContent>
    </Card>
  );
}

export default UserDetail;