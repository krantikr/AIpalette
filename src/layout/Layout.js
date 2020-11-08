import React from 'react';
import Header from './../components/header/Header'

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      {children}
    </div>
  );
}

export default Layout;