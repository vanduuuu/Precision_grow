import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,query, where } from "firebase/firestore";
import dotenv from "dotenv";
import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";  // To write to the file system
import path from "path";  // To handle file paths

dotenv.config();  // Load environment variables from .env file
// 1497
// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Function to fetch slugs only from "Precision Grow" categoryId
const fetchSlugs = async () => {
  try {
    console.log("Fetching Precision Grow slugs from Firebase...");
    const q = query(
      collection(db, "posts"),
      where("categoryId", "==", "Precision Grow") // only Precision Grow blogs
    );
    const querySnapshot = await getDocs(q);

    const slugs = [];
  querySnapshot.forEach((doc) => {
  console.log("Document data:", doc.data()); // Check all fields
  const data = doc.data();
  if (data.slug && data.categoryId === "Precision Grow") {
    slugs.push(data.slug);
  }
});


    console.log("Precision Grow slugs fetched:", slugs);
    return slugs;
  } catch (error) {
    console.error("Error fetching slugs: ", error);
    return [];
  }
};


// Function to generate sitemap
const generateSitemap = async () => {
  console.log("Starting sitemap generation...");  // Added log

  const slugs = await fetchSlugs();  // Get slugs from Firestore

  if (slugs.length === 0) {
    console.log("No posts found in Firestore.");
    return;
  }

  console.log("Slugs fetched:", slugs);  // Debugging log

  // Create the SitemapStream instance
  const sitemapStream = new SitemapStream({ hostname: "https://precisiongrow.co.in" }); // Replace with your website's URL

  // Static routes for your site
  const staticRoutes = [
    "/",
    "/about",
    "/crop-monitoring",
    "/fish-monitoring",
    "/Farmboundary",
    "/precision-grow-ai",
    "/crop-advisory",
    "/regenerative-agriculture",
    "/product-traceability",
    "/wildfire-solution",
    "/agri-insurance",
    "/agri-loan",
    "/agri-drone",
    "/sustainability",
    "/contact",
    "/faq",
    "/feedback",
    "/ecrop",
    "/ecoloo",
    "/biosense",
    "/skywatch",
    "/policy",
    "/krishak-bazar",
    "/ecrop-for-coffee",
    "/agristack",
    "/crop-consultancy",
    "/sustainable-farming-solutions",
    "/technology-integration"
  ];

  // Write URLs to the sitemap stream (Static routes)
  staticRoutes.forEach((route) => {
    console.log(`Adding static route to sitemap: ${route}`);  // Debugging log
    sitemapStream.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  // Write URLs to the sitemap stream (Dynamic blog slugs)
  slugs.forEach((slug) => {
    console.log(`Adding slug to sitemap: /post/${slug}`);  // Debugging log
    sitemapStream.write({ url: `/post/${slug}`, changefreq: "daily", priority: 0.7 });
  });

  sitemapStream.end();

  // Generate and write the sitemap to a file
  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");  // In case of React app
  try {
    const sitemap = await streamToPromise(sitemapStream);
    fs.writeFileSync(outputPath, sitemap.toString(), "utf8");
    console.log("Sitemap generated successfully at:", outputPath);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

// Call the function to generate the sitemap
export default generateSitemap;

