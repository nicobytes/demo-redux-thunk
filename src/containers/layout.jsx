import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/layout.styl';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <section>{children}</section>
      </div>
    </>
  );
};

export default Layout;
