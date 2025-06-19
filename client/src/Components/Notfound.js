import React from 'react';
import { Helmet } from 'react-helmet-async';

const Notfound = () => {
  return (
    <div className="text-center p-10">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Oops! The page you are looking for does not exist." />
      </Helmet>
      <h2 className="fs-1 font-bold text-danger mt-4">404 - Page Not Found</h2>
      <p className="mt-4 text-gray-600">Sorry! This page doesn't exist.</p>
      <a href="/" className="text-success fs-4 mt-6 ">Go back to Home</a>
    </div>
  );
};

export default Notfound;
