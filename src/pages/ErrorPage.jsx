// src/components/ErrorPage.jsx
import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Page Not Found</h1>
      <p style={styles.code}>Error: {error?.status || 404}</p>
      <p style={styles.message}>
        {error?.statusText || error?.message || 'Something went wrong.'}
      </p>
      <NavLink to="/" style={styles.link}>Go Back Home</NavLink>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Urbanist, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    color: '#ff4d4f',
    marginBottom: '10px',
  },
  code: {
    fontSize: '24px',
    color: '#6c757d',
    margin: 0,
  },
  message: {
    fontSize: '18px',
    color: '#333',
    margin: '10px 0 20px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  }
};

export default ErrorPage;
