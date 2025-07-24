import React, { createContext, useState, useEffect, useMemo } from "react";
import { db } from "./Firebaseconfig.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";

// Step 1: Create the context
export const BlogContext = createContext();

// Step 2: Create the provider
export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Step 3: Create query for Precision Grow posts
    const blogQuery = query(
      collection(db, "posts"),
      where("categoryId", "==", "Precision Grow")
    );

    // Step 4: Set up real-time listener
    const unsubscribe = onSnapshot(
      blogQuery,
      (snapshot) => {
        const blogPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(blogPosts);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    );

    // Step 5: Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  // Step 6: Memoize the context value
  const contextValue = useMemo(() => ({ posts, loading }), [posts, loading]);

  // Step 7: Return the provider
  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};
