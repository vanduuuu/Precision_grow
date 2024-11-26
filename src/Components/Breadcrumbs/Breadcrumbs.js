import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Breadcrumbs.css';

const Breadcrumbs = ({ items, current }) => {
  return (
    <div className="container text-center">
      <nav aria-label="breadcrumb" style={{ boxShadow: 'none' }}>
        <ol className="breadcrumb justify-content-center">
          {items.map((item, index) => (
            <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'text-warning' : ''}`} aria-current={index === items.length - 1 ? 'page' : undefined}>
              {index === items.length - 1 ? (
                current
              ) : (
                <Link to={item.path} className="text-light">{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
