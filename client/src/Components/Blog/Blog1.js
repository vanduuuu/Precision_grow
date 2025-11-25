// import React, { useContext, useEffect, useState } from "react";
// import { GenericContext } from "../../Contexts/GenericProvider.js";
// import { Container, Row, Col } from "react-bootstrap";
// import { Helmet } from "react-helmet-async";

// import "../Blog/Blog.css";
// import Blogcards from "./BlogCards.js";

// const Blogs = () => {
//   const { dataMap, fetchData } = useContext(GenericContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 12;

//   const collectionName = "posts"; // Firestore collection
//   const categoryId = "Precision Grow"; // jo bhi aap use kar rahe ho
//   const key = `${collectionName}_${categoryId}`;

//   // Data fetch karna
//   useEffect(() => {
//     const unsubscribe = fetchData(collectionName, categoryId, 100); // 100 blogs tak le aayega
//     return () => unsubscribe && unsubscribe();
//   }, [fetchData]);

//   const posts = dataMap[key] || [];
//   const loading = !posts || posts.length === 0;

//   // Firestore timestamp → JS Date
//   const parseTimestamp = (timestamp) => {
//     if (!timestamp) return null;
//     return new Date(
//       timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000)
//     );
//   };

//   // Date format
//   const formatDate = (date) => {
//     if (!date) return "Date not available";
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // Sort latest → oldest
//   const sortedPosts = [...posts].sort((a, b) => {
//     const timestampA = a.timestamp?.seconds || 0;
//     const timestampB = b.timestamp?.seconds || 0;
//     return timestampB - timestampA;
//   });

//   // Pagination
//   const totalPages = Math.ceil(sortedPosts.length / blogsPerPage);
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = sortedPosts.slice(indexOfFirstBlog, indexOfLastBlog);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

//   const generatePagination = () => {
//     const pageNumbers = [];
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, startPage + 4);

//     if (endPage - startPage < 4) {
//       startPage = Math.max(1, endPage - 4);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pageNumbers.push(i);
//     }
//     return pageNumbers;
//   };

//   // Current date (UI ke liye)
//   const currentDate = new Date().toLocaleDateString("en-GB", {
//     weekday: "long",
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <>
//       <div className="blog-det-outer">
//         <Helmet>
//           <title>
//             Precision Grow Blog: Insights on Smart Farming & Agri-Tech
//           </title>
//           <meta
//             name="description"
//             content="Stay updated with Precision Grow's blog. Explore articles on smart farming, IoT devices, and smart Agri tools to enhance agricultural practices and sustainability."
//           />
//           <meta
//             name="keywords"
//             content="agri-tech trends, sustainable farming news, precision agriculture blog"
//           />
//         </Helmet>

//         <Container className="py-3">
//           {/* Date + Category */}
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div>
//               <strong>Date:</strong> {currentDate}
//             </div>
//             <div>
//               <strong>Category:</strong> {categoryId}
//             </div>
//           </div>

//           <h1 className="text-2xl fw-bold text-start display-4 text-black">
//             Precision Grow | Blogs
//           </h1>
//           <p>
//             <i>
//               "At Precision Grow, we are pioneering a new era in agriculture,
//               harnessing the power of cutting-edge satellite analytics to
//               revolutionize the way we farm. Our commitment is to empower
//               farmers with precision insights that drive efficiency,
//               sustainability, and unprecedented crop management. Explore the
//               future of agriculture with Precision Grow!"
//             </i>
//           </p>

//              <Row className="justify-content-center">
//             {loading ? (
//               <h2 className="text-center">Loading...</h2>
//             ) : currentBlogs.length > 0 ? (
//               currentBlogs.map((blog) => {
//                 const dateObj = parseTimestamp(blog.timestamp);
//                 const formattedDate = formatDate(dateObj);

//                 return (
//                   <Col xs={12} md={4} lg={4} key={blog.id} className="mb-4">
//                     <Blogcards
//                       image={blog.imageURL}
//                       title={blog.title}
//                       date={formattedDate}  // Pass formatted date string
//                       author={blog.authorName}
//                       detailPage={`/post/${blog.id}`}
//                     />
//                   </Col>
//                 );
//               })
//             ) : (
//               <h2 className="text-center">No blogs found</h2>
//             )}
//           </Row>
//         </Container>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="pagination-container d-flex justify-content-center my-4">
//             <button
//               className="pagebtn"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>

//             {generatePagination().map((page, index) => (
//               <button
//                 key={index}
//                 className={`pagebtn ${
//                   currentPage === page ? "active" : ""
//                 }`}
//                 onClick={() =>
//                   typeof page === "number" && handlePageChange(page)
//                 }
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               className="pagebtn"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Blogs;
import React, { useContext, useEffect, useState } from "react";
import { GenericContext } from "../../Contexts/GenericProvider.js";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import "../Blog/Blog.css";
import Blogcards from "./BlogCards.js";

const Blogs = () => {
  const { dataMap, fetchData, loadingMap } = useContext(GenericContext);

  const collectionName = "posts";
  const categoryId = "Precision Grow";
  const key = `${collectionName}_${categoryId}`;

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Data fetch when page changes
  useEffect(() => {
    fetchData(collectionName, categoryId, false, "timestamp");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const allPosts = dataMap[key] || [];
  const totalPages = Math.max(1, Math.ceil(allPosts.length / pageSize));
  const posts = allPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const loading = (loadingMap[key] ?? false) && posts.length === 0;

  // Firestore timestamp → Date format
  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) return "Date not available";
    const date = new Date(
      timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000)
    );
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Pagination range with ellipses
  const paginationRange = () => {
    const pages = [];
    const total = totalPages;

    pages.push(1);
    if (currentPage > 3 && total > 5) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(total - 1, currentPage + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    if (currentPage < total - 2 && total > 5) pages.push("...");
    if (total > 1) pages.push(total);

    return pages.filter((v, i, arr) => i === 0 || v !== arr[i - 1]);
  };

  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="blog-det-outer">
      <Helmet>
        <title>Precision Grow Blog: Insights on Smart Farming & Agri-Tech</title>
        <meta
          name="description"
          content="Stay updated with Precision Grow's blog. Explore articles on smart farming, IoT devices, and smart Agri tools to enhance agricultural practices and sustainability."
        />
        <meta
          name="keywords"
          content="agri-tech trends, sustainable farming news, precision agriculture blog"
        />
      </Helmet>

      <Container className="py-3">
        {/* Date + Category */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <strong>Date:</strong> {currentDate}
          </div>
          <div>
            <strong>Category:</strong> {categoryId}
          </div>
        </div>

        <h1 className="text-2xl fw-bold text-start display-4 text-black">
          Precision Grow | Blogs
        </h1>
        <p>
          <i>
            "At Precision Grow, we are pioneering a new era in agriculture, harnessing the power of cutting-edge satellite analytics to revolutionize the way we farm. Our commitment is to empower farmers with precision insights that drive efficiency, sustainability, and unprecedented crop management. Explore the future of agriculture with Precision Grow!"
          </i>
        </p>

        <Row className="justify-content-center">
          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : posts.length > 0 ? (
            posts.map((blog) => (
              <Col xs={12} md={6} lg={4} key={blog.id} className="mb-4">
                <Blogcards
                  image={blog.imageURL}
                  title={blog.title}
                  date={formatDate(blog.timestamp)}
                  author={blog.authorName}
                  detailPage={`/post/${blog.id}`}
                />
              </Col>
            ))
          ) : (
            <h2 className="text-center">No blogs found</h2>
          )}
        </Row>
      </Container>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4 flex-wrap">
          <button
            className="btn btn-outline-success mx-1 my-1"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            Previous
          </button>

          {paginationRange().map((page, idx) =>
            page === "..." ? (
              <span key={`dots-${idx}`} className="mx-2 my-1">
                ...
              </span>
            ) : (
              <button
                key={`p-${page}-${idx}`}
                className={`mx-1 my-1 btn ${currentPage === page ? "btn-success text-white" : "btn-outline-success"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className="btn btn-outline-success mx-1 my-1"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
