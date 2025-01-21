import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import UserContext from './context/UserContext.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <UserContext.Provider
          value={{
            users: filteredUsers,
            searchTerm,
            setSearchTerm: handleSearchChange,
            sortOrder,
            setSortOrder: handleSortChange,
          }}
        >
          <div className="container">
            <h1>User Management</h1>
            <SearchBar />
            <SortBar />
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;