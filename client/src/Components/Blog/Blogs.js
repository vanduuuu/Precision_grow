import React, { useContext, useState } from 'react';
import { BlogContext } from './BlogProvider.js';  // Adjust path if needed
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

import '../Blog/Blog.css';
import Blogcards from './BlogCards.js';

const Blogs = () => {
  const { posts, loading } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const category = "Precision Grow";

  // Parse Firestore timestamp to JS Date
  const parseTimestamp = (timestamp) => {
    if (!timestamp) return null;
    return new Date(timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000));
  };

  // Format Date as "DD MMM YYYY"
  const formatDate = (date) => {
    if (!date) return "Date not available";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Sort posts by timestamp descending (latest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const timestampA = a.timestamp?.seconds || 0;
    const timestampB = b.timestamp?.seconds || 0;
    return timestampB - timestampA;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedPosts.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const generatePagination = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Current date display (optional, not blog related)
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });

  return (
    <>
      <div className='blog-det-outer'>
        <Helmet>
          <title>Precision Grow Blog: Insights on Smart Farming & Agri-Tech</title>
          <meta name="description" content="Stay updated with Precision Grow's blog. Explore articles on smart farming, IoT devices, and smart Agri tools to enhance agricultural practices and sustainability." />
          <meta name="keywords" content="agri-tech trends, sustainable farming news, precision agriculture blog" />
        </Helmet>

        <Container className="py-3">
          {/* Display current date and category */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div><strong>Date:</strong> {currentDate}</div>
            <div><strong>Category:</strong> {category}</div>
          </div>

          <h1 className="text-2xl fw-bold text-start display-4 text-black">Precision Grow | Blogs</h1>
          <p>
            <i>
              "At Precision Grow, we are pioneering a new era in agriculture, harnessing the power of cutting-edge satellite analytics to revolutionize the way we farm. Our commitment is to empower farmers with precision insights that drive efficiency, sustainability, and unprecedented crop management. Explore the future of agriculture with Precision Grow!"
            </i>
          </p>

          <Row className="justify-content-center">
            {loading ? (
              <h2 className="text-center">Loading...</h2>
            ) : currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => {
                const dateObj = parseTimestamp(blog.timestamp);
                const formattedDate = formatDate(dateObj);

                return (
                  <Col xs={12} md={4} lg={4} key={blog.id} className="mb-4">
                    <Blogcards
                      image={blog.imageURL}
                      title={blog.title}
                      date={formattedDate}  // Pass formatted date string
                      author={blog.authorName}
                      detailPage={`/post/${blog.id}`}
                    />
                  </Col>
                );
              })
            ) : (
              <h2 className="text-center">No blogs found</h2>
            )}
          </Row>
        </Container>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container d-flex justify-content-center my-4">
            <button 
              className="pagebtn" 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {generatePagination().map((page, index) => (
              <button 
                key={index} 
                className={`pagebtn ${currentPage === page ? 'active' : ''}`} 
                onClick={() => typeof page === "number" && handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button 
              className="pagebtn" 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
