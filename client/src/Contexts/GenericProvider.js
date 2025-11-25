
//  import React, { createContext, useState, useMemo, useRef, useEffect, useCallback } from "react";
// import { db } from "./Firebaseconfig.js";
// import {
//   collection,
//   query,
//   where,
//   orderBy,
//   limit,
//   startAfter,
//   getDocs,
//   getCountFromServer,
// } from "firebase/firestore";

// export const GenericContext = createContext();

// export const GenericProvider = ({ children }) => {
//   const [dataMap, setDataMap] = useState({});
//   const [loadingMap, setLoadingMap] = useState({});
//   const [pageCursors, setPageCursors] = useState({});
//   const [totalDocsMap, setTotalDocsMap] = useState({});

//   // Refs for avoiding stale closures
//   const cursorsRef = useRef(pageCursors);
//   const totalsRef = useRef(totalDocsMap);
//   const dataRef = useRef(dataMap);

//   useEffect(() => { cursorsRef.current = pageCursors; }, [pageCursors]);
//   useEffect(() => { totalsRef.current = totalDocsMap; }, [totalDocsMap]);
//   useEffect(() => { dataRef.current = dataMap; }, [dataMap]);

//   const fetchPage = useCallback(
    
//     async (collectionName, categoryId, pageSize = 9, page = 1) => {
//       if (!categoryId) {
//         console.error("categoryId is required!");
//         return [];
//       }

//       const key = `${collectionName}_${categoryId}`;

//       // Cached data check
//       const cached = dataRef.current[key]?.[page];
//       if (cached && cached.length) return cached;

//       setLoadingMap(prev => ({ ...prev, [key]: true }));

//       try {
//         // Count total docs once per collection+category
//         if (!totalsRef.current[key]) {
//           const countQuery = query(
//             collection(db, collectionName),
//             where("categoryId", "==", categoryId)
//           );
//           const snap = await getCountFromServer(countQuery);
//           setTotalDocsMap(prev => ({ ...prev, [key]: snap.data().count }));
//         }

//         // Sorting field selection
//         let orderField = "timestamp"; // default
//         if (collectionName === "newsletter") {
//           orderField = "sortedDate"; 
//         }

//         // Pagination cursor
//         const cursor = cursorsRef.current[key]?.[page - 1] || null;

//         let q = query(
//           collection(db, collectionName),
//           where("categoryId", "==", categoryId),
//           orderBy(orderField, "desc"),
//           ...(cursor ? [startAfter(cursor)] : []),
//           limit(pageSize)
//         );

// // Fetch data
// const snapshot = await getDocs(q);
// const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));




//         // Save cursor for next page
//         if (snapshot.docs.length > 0) {
//           setPageCursors(prev => {
//             const updated = { ...prev };
//             if (!updated[key]) updated[key] = {};
//             updated[key][page] = snapshot.docs[snapshot.docs.length - 1];
//             return updated;
//           });
//         }

//         // Cache the page data
//         setDataMap(prev => {
//           const updated = { ...prev };
//           if (!updated[key]) updated[key] = {};
//           updated[key][page] = data;
//           return updated;
//         });

//         return data;
//       } catch (err) {
//         console.error("Error fetching page:", err);
//         return [];
//       } finally {
//         setLoadingMap(prev => ({ ...prev, [key]: false }));
//       }
//     },
//     []
    
//   );

//   const contextValue = useMemo(
//     () => ({ dataMap, loadingMap, fetchPage, totalDocsMap }),
//     [dataMap, loadingMap, fetchPage, totalDocsMap]
//   );

//   return (
//     <GenericContext.Provider value={contextValue}>
//       {children}
//     </GenericContext.Provider>
//   );
// };
import React, { createContext, useState, useMemo, useCallback } from "react";
import { db } from "./Firebaseconfig.js";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

export const GenericContext = createContext();
const pendingRequests = {};

export const GenericProvider = ({ children }) => {
  const [dataMap, setDataMap] = useState({});
  const [loadingMap, setLoadingMap] = useState({});

  /**
   * fetchData
   * @param {string} collectionName - Firestore collection
   * @param {string} categoryId - category filter
   * @param {boolean} forceRefresh - if true, ignores cache
   * @param {string} sortField - which field to sort by (default: sortedDate)
   */
  const fetchData = useCallback(
    async (collectionName, categoryId, forceRefresh = false, sortField = "sortedDate") => {
      const key = `${collectionName}_${categoryId}`;

      if (dataMap[key] && !forceRefresh) return dataMap[key];
      if (pendingRequests[key]) return pendingRequests[key]; // already fetching

      setLoadingMap(prev => ({ ...prev, [key]: true }));

      pendingRequests[key] = (async () => {
        try {
          const q = query(
            collection(db, collectionName),
            where("categoryId", "==", categoryId),
            orderBy(sortField, "desc")
          );

          const snapshot = await getDocs(q);
          const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

          setDataMap(prev => ({ ...prev, [key]: docs }));
          return docs;
        } catch (err) {
          console.error("Error fetching data:", err);
          return [];
        } finally {
          setLoadingMap(prev => ({ ...prev, [key]: false }));
          delete pendingRequests[key];
        }
      })();

      return pendingRequests[key];
    },
    [dataMap]
  );

  /**
   * getPage
   * Returns sliced data for pagination
   */
  const getPage = useCallback(
    (collectionName, categoryId, page = 1, pageSize = 9) => {
      const key = `${collectionName}_${categoryId}`;
      const allData = dataMap[key] || [];
      const start = (page - 1) * pageSize;
      return allData.slice(start, start + pageSize);
    },
    [dataMap]
  );

  const contextValue = useMemo(
    () => ({ dataMap, loadingMap, fetchData, getPage }),
    [dataMap, loadingMap, fetchData, getPage]
  );

  return <GenericContext.Provider value={contextValue}>{children}</GenericContext.Provider>;
};
