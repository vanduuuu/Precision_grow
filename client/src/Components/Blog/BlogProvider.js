import React, { createContext, useState, useEffect, useMemo } from "react";
import { db } from "./Firebaseconfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = "precisionGrowPosts";

    const cachedPosts = localStorage.getItem(CACHE_KEY);
    if (cachedPosts) {
      setPosts(JSON.parse(cachedPosts));
      setLoading(false);
    }

    const fetchAndUpdatePosts = async () => {
      try {
        const blogQuery = query(
          collection(db, "posts"),
          where("categoryId", "==", "Precision Grow")
        );
        const blogSnapshot = await getDocs(blogQuery);
        const blogPosts = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Compare old and new data to avoid unnecessary updates
        const oldPosts = localStorage.getItem(CACHE_KEY);
        const oldPostsParsed = oldPosts ? JSON.parse(oldPosts) : null;

        const isSame =
          oldPostsParsed &&
          JSON.stringify(oldPostsParsed) === JSON.stringify(blogPosts);

        if (!isSame) {
          setPosts(blogPosts);
          localStorage.setItem(CACHE_KEY, JSON.stringify(blogPosts));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchAndUpdatePosts();
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ posts, loading }), [posts, loading]);

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};
