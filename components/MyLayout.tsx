import * as React from 'react';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout: React.FC = (properties) => (
  <div style={layoutStyle}>
    <Header />
    {properties.children}
  </div>
);

export default Layout;
