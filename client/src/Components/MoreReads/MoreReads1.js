// import React, { useState, useContext, useEffect } from "react";
// import "./MoreReads.css";
// import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";
// import { Helmet } from "react-helmet-async";
// import { GenericContext } from "../../Contexts/GenericProvider.js";

// const MoreReads1 = () => {
//   const { dataMap, loadingMap, fetchPage, totalDocsMap } =
//     useContext(GenericContext);

//   const collectionName = "Newsletter";
//   const categoryId = "Precision Grow"; // adjust per route
//   // const orderField = "timestamp"; // or "timestamp"
//   const key = `${collectionName}_${categoryId}`;

//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 9;

//   // total pages
//   const totalDocs = totalDocsMap[key] ?? 0;
//   const totalPages = Math.max(1, Math.ceil(totalDocs / pageSize));

//   // Fetch when page/order changes
// useEffect(() => {
//   fetchPage(collectionName, categoryId, pageSize, currentPage);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [collectionName, categoryId, currentPage, pageSize]);


//   const articles = dataMap[key]?.[currentPage] || [];
//   // Only show the loader if we don't already have cached data for this page
//   const loading = (loadingMap[key] ?? false) && articles.length === 0;

//   // Smart pagination range with ellipses
//   const paginationRange = () => {
//     const pages = [];
//     const total = totalPages;

//     // Always show first page
//     pages.push(1);

//     // If we are far from the start, show ellipsis
//     if (currentPage > 3 && total > 5) pages.push("...");

//     // Show currentPage -1, currentPage, currentPage +1 within bounds
//     const start = Math.max(2, currentPage - 1);
//     const end = Math.min(total - 1, currentPage + 1);
//     for (let p = start; p <= end; p++) pages.push(p);

//     // If we are far from the end, show ellipsis
//     if (currentPage < total - 2 && total > 5) pages.push("...");

//     // Always show last page if more than one page
//     if (total > 1) pages.push(total);

//     // Remove possible duplicates (when total small)
//     return pages.filter(
//       (v, i, arr) => i === 0 || v !== arr[i - 1]
//     );
//   };

//   return (
//     <>
//       <Helmet>
//         <title>
//           More Reads on Smart Farming & Agri-Tech Tools | Precision Grow
//         </title>
//         <meta
//           name="description"
//           content="Dive deeper into smart farming insights, IoT device innovations, and smart Agri tools with Precision Grow’s curated articles."
//         />
//         <link rel="canonical" href="https://precisiongrow.co.in/more-reads" />
//       </Helmet>

//       <div className="container my-5">
//         <Titleunderline title="More Reads" tag="h1" />

//         {loading ? (
//           <p className="text-center my-4">Loading...</p>
//         ) : (
//           <div className="row justify-content-center">
//             {articles.map((pub, index) => (
//               <div className="col-md-6 col-lg-4 mb-4" key={pub.id}>
//                 <div className="glass-card h-100 d-flex flex-column position-relative shadow-sm rounded-4 border border-gradient">
//                   <div className="serial-number">
//                     {(currentPage - 1) * pageSize + index + 1}
//                   </div>

//                   <div className="flex-grow-1">
//                     <p className="mb-2 pub-hover">
//                       <strong>Publication Name:</strong>{" "}
//                       {pub.publicationName}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Article Title:</strong> {pub.articleTitle}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Volume:</strong> {pub.volume}
//                     </p>
//                     {/* <p className="mb-4">
//                       <strong>Days of Publication:</strong>{" "}
//                       {pub.daysOfPublication || pub.timestamp}
//                     </p> */}
//                     <p className="mb-4">
//   <strong>Date of Publication:</strong>{" "}
//   {pub.daysOfPublication || "-"}  {/* fallback if not available */}
// </p>

//                   </div>

//                   <div className="text-end mt-auto">
//                     <a
//                       href={pub.pdfUrl}
//                       className="btn gradient-btn btn-sm text-white px-3"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                     >
//                       📄 View PDF
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {articles.length === 0 && !loading && (
//               <div className="col-12 text-center text-muted my-4">
//                 No articles found.
//               </div>
//             )}
//           </div>
//         )}

//         {/* Smart Pagination */}
//         <div className="d-flex justify-content-center mt-4 flex-wrap">
//           <button
//             className="btn btn-outline-success mx-1 my-1"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           >
//             Previous
//           </button>

//           {paginationRange().map((page, idx) =>
//             page === "..." ? (
//               <span key={`dots-${idx}`} className="mx-2 my-1">
//                 ...
//               </span>
//             ) : (
//               <button
//                 key={`p-${page}-${idx}`}
//                 className={`mx-1 my-1 btn ${
//                   currentPage === page
//                     ? "btn-success text-white"
//                     : "btn-outline-success"
//                 }`}
//                 onClick={() => setCurrentPage(page)}
//               >
//                 {page}
//               </button>
//             )
//           )}

//           <button
//             className="btn btn-outline-success mx-1 my-1"
//             disabled={currentPage === totalPages}
//             onClick={() =>
//               setCurrentPage((p) => Math.min(p + 1, totalPages))
//             }
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MoreReads1;

import React, { useState, useEffect, useContext } from "react";
import "./MoreReads.css";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";
import { Helmet } from "react-helmet-async";
import { GenericContext } from "../../Contexts/GenericProvider.js";

const MoreReads1 = () => {
  const {fetchData, getPage } = useContext(GenericContext);

  const collectionName = "Newsletter";
  const categoryId = "Precision Grow";
  const pageSize = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const allData = await fetchData(collectionName, categoryId);
      setTotalPages(Math.max(1, Math.ceil(allData.length / pageSize)));
      const pageData = getPage(collectionName, categoryId, currentPage, pageSize);
      setArticles(pageData);
      setLoading(false);
    };

    load();
  }, [collectionName, categoryId, currentPage, fetchData, getPage]);

  // Pagination range helper
  const paginationRange = () => {
    const pages = [];
    pages.push(1);
    if (currentPage > 3 && totalPages > 5) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    if (currentPage < totalPages - 2 && totalPages > 5) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages.filter((v, i, arr) => i === 0 || v !== arr[i - 1]);
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
          <p className="text-center my-4">Loading...</p>
        ) : articles.length === 0 ? (
          <div className="col-12 text-center text-muted my-4">
            No articles found.
          </div>
        ) : (
          <div className="row justify-content-center">
            {articles.map((pub, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={pub.id}>
                <div className="glass-card h-100 d-flex flex-column position-relative shadow-sm rounded-4 border border-gradient">
                  <div className="serial-number">
                    {(currentPage - 1) * pageSize + index + 1}
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
  <strong>Date of Publication:</strong>{" "}
  {pub.daysOfPublication || "-"} {/* fallback if not available */}
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

        {/* Pagination buttons */}
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
                className={`mx-1 my-1 btn ${
                  currentPage === page ? "btn-success text-white" : "btn-outline-success"
                }`}
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
      </div>
    </>
  );
};

export default MoreReads1;
