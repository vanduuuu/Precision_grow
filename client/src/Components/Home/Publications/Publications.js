// // Publications.js
// import React, { useContext, useEffect, useMemo} from "react";
// import { GenericContext } from "../../../Contexts/GenericProvider.js";
// import PublicationCard from "./PublicationCard.js";

// const Publications = () => {
//   const { dataMap, loadingMap, fetchData } = useContext(GenericContext);

//   const collectionName = "magazines";
//   const categoryId = "e-CROPTODAY";
//   const key = `${collectionName}_${categoryId}`;

//   // const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 6; // Display limit

//   // 🔹 Fetch only latest 6 magazines on mount
//   useEffect(() => {
//     const unsubscribe = fetchData(collectionName, categoryId, 6); // only 6 latest
//     return () => unsubscribe && unsubscribe();
//   }, [fetchData, collectionName, categoryId]);

//   const loading = loadingMap[key] || false;

//   // 🔹 Sort descending by timestamp just in case
//   const latestMagazines = useMemo(() => {
//     if (!dataMap[key] || dataMap[key].length === 0) return [];
//     return [...dataMap[key]]
//       .sort((a, b) => {
//         const aTime = a.timestamp?.toDate?.() || new Date(0);
//         const bTime = b.timestamp?.toDate?.() || new Date(0);
//         return bTime - aTime; // Latest first
//       })
//       .slice(0, articlesPerPage); // limit to 6
//   }, [dataMap, key]);

//   // 🔹 Loading & empty state handling
//   if (loading) return <p>Loading magazines...</p>;
//   if (!loading && latestMagazines.length === 0) return <p>No magazines found.</p>;

//   return (
//     <div className="container my-3">
//       <h2 className="text-center mb-4 fs-1 boldlook">Latest Publications</h2>
//       <div className="row">
//         {latestMagazines.map((mag) => (
//           <div className="col-md-12 col-lg-6 mb-4" key={mag.id}>
//             <PublicationCard magazine={mag} />
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-4">
//         <p className="mb-3 fs-3">
//           Want to explore more <strong className="italic">Publications?</strong> Visit our complete archive.
//         </p>
//         <a
//           href="https://ecroptoday.co.in/e-magazine"
//           className="btn btn-success"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           View All Publications
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Publications;

// Publications.js
import React, { useContext, useEffect, useMemo } from "react";
import { GenericContext } from "../../../Contexts/GenericProvider.js";
import PublicationCard from "./PublicationCard.js";

const Publications = () => {
  const { dataMap, loadingMap, fetchData } = useContext(GenericContext);

  const collectionName = "magazines";
  const categoryId = "e-CROPTODAY";
  const orderField = "timestamp"; // ✅ sort by timestamp
  const key = `${collectionName}_${categoryId}`;

  const pageSize = 6; // show only 6 latest
  const currentPage = 1; // always first page for latest publications

  // 🔹 Fetch only latest 6 magazines on mount, sorted by timestamp
  useEffect(() => {
    fetchData(collectionName, categoryId, false, orderField);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, categoryId, pageSize, currentPage]);

  const loading = (loadingMap[key] ?? false);

  // 🔹 Data: take first 6 items sorted by timestamp desc
  const latestMagazines = useMemo(() => {
    if (!dataMap[key]) return [];
    // already sorted in provider by timestamp desc
    return dataMap[key].slice(0, pageSize);
  }, [dataMap, key, pageSize]);

  // 🔹 Loading & empty state handling
  if (loading && latestMagazines.length === 0) return <p>Loading magazines...</p>;
  if (!loading && latestMagazines.length === 0) return <p>No magazines found.</p>;

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4 fs-1 boldlook">Latest Publications</h2>
      <div className="row">
        {latestMagazines.map((mag) => (
          <div className="col-md-12 col-lg-6 mb-4" key={mag.id}>
            <PublicationCard magazine={mag} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="mb-3 fs-3">
          Want to explore more <strong className="italic">Publications?</strong> Visit our complete archive.
        </p>
        <a
          href="https://ecroptoday.co.in/e-magazine"
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Publications
        </a>
      </div>
    </div>
  );
};

export default Publications;
