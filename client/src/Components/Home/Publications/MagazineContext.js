// MagazineContext.js
import React, { createContext, useState, useEffect, useMemo } from "react";
import { db } from "../../Blog/Firebaseconfig.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";

// 🔹 Step 1: Create context
export const MagazineContext = createContext();

// 🔹 Step 2: Create provider
export const MagazineProvider = ({ children }) => {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔍 Fetch all magazines from e-CROPTODAY (without orderBy or limit)
    const magazineQuery = query(
      collection(db, "magazines"),
      where("categoryId", "==", "e-CROPTODAY")
    );

    const unsubscribe = onSnapshot(
      magazineQuery,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMagazines(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching magazines:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // 🔧 useMemo to optimize context value
  const contextValue = useMemo(() => ({ magazines, loading }), [magazines, loading]);

  return (
    <MagazineContext.Provider value={contextValue}>
      {children}
    </MagazineContext.Provider>
  );
};
