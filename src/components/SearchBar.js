import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import UserContext from '../context/UserContext.js';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(UserContext);

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={setSearchTerm}
    />
  );
}

export default SearchBar;