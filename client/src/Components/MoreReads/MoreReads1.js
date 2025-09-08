// MoreReads1.js
import React, { useState, useContext, useEffect } from "react";
import "./MoreReads.css";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";
import { Helmet } from "react-helmet-async";
import { GenericContext } from "../../Contexts/GenericProvider.js";

const MoreReads1 = () => {
  const { dataMap, loadingMap, fetchData } = useContext(GenericContext);

  const collectionName = "Newsletter";
  const categoryId = "Precision Grow";
  const key = `${collectionName}_${categoryId}`;

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    const unsubscribe = fetchData(collectionName, categoryId, 50); // fetch max 50 at a time
    return () => unsubscribe && unsubscribe();
  }, [fetchData, collectionName, categoryId]);

  // 🔥 Client-side descending sort (latest first)
  const articles = (dataMap[key] || []).sort(
    (a, b) => new Date(b.daysOfPublication) - new Date(a.daysOfPublication)
  );

  const loading = loadingMap[key] || false;

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) pages.push(i);

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
        <title>
          More Reads on Smart Farming & Agri-Tech Tools | Precision Grow
        </title>
        <meta
          name="description"
          content="Dive deeper into smart farming insights, IoT device innovations, and smart Agri tools with Precision Grow’s curated articles."
        />
        <link rel="canonical" href="https://precisiongrow.co.in/more-reads" />
      </Helmet>

      <div className="container my-5">
        <Titleunderline title="More Reads" tag="h1" />

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row justify-content-center">
            {currentArticles.map((pub, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={pub.id}>
                <div className="glass-card h-100 d-flex flex-column position-relative shadow-sm rounded-4 border border-gradient">
                  <div className="serial-number">
                    {indexOfFirstArticle + index + 1}
                  </div>

                  <div className="flex-grow-1">
                    <p className="mb-2 pub-hover">
                      <strong>Publication Name:</strong> {pub.publicationName}
                    </p>
                    <p className="mb-2">
                      <strong>Article Title:</strong> {pub.articleTitle}
                    </p>
                    <p className="mb-2">
                      <strong>Volume:</strong> {pub.volume}
                    </p>
                    <p className="mb-4">
                      <strong>Days of Publication:</strong> {pub.daysOfPublication}
                    </p>
                  </div>

                  <div className="text-end mt-auto">
                    <a
                      href={pub.pdfUrl}
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
        )}

        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link text-success"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

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
                          currentPage === page ? "bg-success text-white" : "text-success"
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    )}
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
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
        )}
      </div>
    </>
  );
};

export default MoreReads1;
