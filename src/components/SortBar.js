import React, { useContext } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import UserContext from '../context/UserContext.js';

function SortBar() {
  const { sortOrder, setSortOrder } = useContext(UserContext);

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={() => setSortOrder('asc')}
        variant={sortOrder === 'asc' ? 'contained' : 'outlined'}
      >
        A-Z
      </Button>
      <Button
        onClick={() => setSortOrder('desc')}
        variant={sortOrder === 'desc' ? 'contained' : 'outlined'}
      >
        Z-A
      </Button>
    </ButtonGroup>
  );
}

export default SortBar;