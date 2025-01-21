import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import UserContext from '../context/UserContext.js';

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;