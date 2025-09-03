import React, { useState } from "react";
import "./MoreReads.css";
import { PublicationApi } from "./PublicationApi";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";
import { Helmet } from "react-helmet-async";

const MoreReads = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Calculate indexes for slicing
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = PublicationApi.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Total pages
  const totalPages = Math.ceil(PublicationApi.length / articlesPerPage);

  // Function to generate limited pagination numbers
  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 3; // max page numbers at a time

    if (totalPages <= maxVisible) {
      // agar total pages 5 se kam hain to sab dikhao
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
         <Helmet>
            <title>More Reads on Smart Farming & Agri-Tech Tools | Precision Grow</title>
            <meta
              name="description"
              content="Dive deeper into smart farming insights, IoT device innovations, and smart Agri tools with Precision Grow’s curated articles. Expand your agri tech knowledge today."
            />
            <link rel="canonical" href="https://precisiongrow.co.in/more-reads" />
          </Helmet>
      <div className="container my-5">
      <Titleunderline title="More Reads" tag="h1" />

      <div className="row justify-content-center">
        {currentArticles.map((pub, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={pub.id}>
            <div className="glass-card h-100 d-flex flex-column position-relative shadow-sm rounded-4 border border-gradient">
              <div className="serial-number">
                {indexOfFirstArticle + index + 1}
              </div>

              <div className="flex-grow-1">
                <p className="mb-2 pub-hover">
                  <strong>Publication Name:</strong>{" "}
                  <span>{pub.name}</span>
                </p>
                <p className="mb-2">
                  <strong>Article Title:</strong> {pub.title}
                </p>
                <p className="mb-2">
                  <strong>Volume:</strong>{" "}
                  <span className="highlight-volume">{pub.volume}</span>
                </p>
                <p className="mb-4">
                  <strong>Days of Publication:</strong> {pub.date}
                </p>
              </div>

              <div className="text-end mt-auto">
                <a
                  href={pub.pdf}
                  className="btn gradient-btn btn-sm text-white px-3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  📄 View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

   {/* Pagination */}
<div className="d-flex justify-content-center mt-4">
  <nav>
    <ul className="pagination">
      {/* Previous Button */}
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link text-success"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      </li>

      {/* Dynamic Page Numbers */}
      {getPaginationNumbers().map((page, i) => (
        <li
          key={i}
          className={`page-item ${page === "..." ? "disabled" : ""}`}
        >
          {page === "..." ? (
            <span className="page-link text-success">...</span>
          ) : (
            <button
              className={`page-link ${
                currentPage === page
                  ? "bg-success text-white"
                  : "text-success"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )}
        </li>
      ))}

      {/* Next Button */}
      <li
        className={`page-item ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        <button
          className="page-link text-success"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</div>

    </div>
    </>
  
  );
};

export default MoreReads;
