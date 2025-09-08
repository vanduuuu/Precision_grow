// GenericProvider.js
import React, { createContext, useState, useCallback, useMemo } from "react";
import { db } from "./Firebaseconfig.js";
import { collection, query, where, limit, onSnapshot } from "firebase/firestore";

export const GenericContext = createContext();

export const GenericProvider = ({ children }) => {
  const [dataMap, setDataMap] = useState({});
  const [loadingMap, setLoadingMap] = useState({});

  const MAX_CACHE_KEYS = 5; // memory safe limit

  const fetchData = useCallback(
    (collectionName, categoryId, fetchLimit = 20) => {
      if (!categoryId) {
        console.error("⚠️ categoryId is required!");
        return;
      }

      const key = `${collectionName}_${categoryId}`;

      if (dataMap[key]) return; // cached

      setLoadingMap((prev) => ({ ...prev, [key]: true }));

      const q = query(
        collection(db, collectionName),
        where("categoryId", "==", categoryId),
        limit(fetchLimit)
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          // ✅ raw data pass (no field selection)
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));

          setDataMap((prev) => {
            const newData = { ...prev, [key]: data };

            // ✅ cache cleanup
            const keys = Object.keys(newData);
            if (keys.length > MAX_CACHE_KEYS) {
              const limitedData = {};
              keys.slice(-MAX_CACHE_KEYS).forEach((k) => (limitedData[k] = newData[k]));
              return limitedData;
            }
            return newData;
          });

          setLoadingMap((prev) => ({ ...prev, [key]: false }));
        },
        (error) => {
          console.error("❌ Error fetching:", error);
          setLoadingMap((prev) => ({ ...prev, [key]: false }));
        }
      );

      return unsubscribe;
    },
    [dataMap]
  );

  const contextValue = useMemo(() => ({ dataMap, loadingMap, fetchData }), [
    dataMap,
    loadingMap,
    fetchData
  ]);

  return <GenericContext.Provider value={contextValue}>{children}</GenericContext.Provider>;
};
