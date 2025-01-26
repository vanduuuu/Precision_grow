const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Your domain name for the sitemap
const domain = "https://precisiongrow.co.in/"; // Replace with your actual domain

// Function to fetch all routes dynamically (from a 'pages' directory or other sources)
function getDynamicRoutes() {
  const routesDir = path.join(__dirname, "src", "Pages"); // Corrected path to 'src/pages'
  const routeFiles = fs.readdirSync(routesDir);

  // Generate route paths based on files (assuming file names match the route)
  return routeFiles.map((file) => {
    const routePath = file.replace(".js", ""); // Assuming the files are named as route components
    return { path: `/${routePath}` };
  });
}

// Fetch routes dynamically (this can be extended to fetch from a DB or CMS)
const dynamicRoutes = getDynamicRoutes();
const allRoutes = [
  { path: "/" },
  { path: "/about" },
  { path: "/services" },
  { path: "/product" },
  { path: "/precision-grow-ai" },
  { path: "/regenerative-agriculture" },
  { path: "/product-traceability" },
  { path: "/wildfire-solution" },
  { path: "/agri-insurance" },
  { path: "/agri-loan" },
  { path: "/agri-drone" },
  { path: "/contact" },
  { path: "/crop-monitoring" },
  { path: "/fish-monitoring" },
  { path: "/automatic-identification-system" },
  { path: "/vessel-monitoring-system" },
  { path: "/satellite-imagery-integration" },
  { path: "/refund-policy" },
  { path: "/terms-conditions" },
  { path: "/privacy-policy" },
  { path: "/ecrop" },
  { path: "/sustainability-overview" },
  { path: "/sustainability-glossary" },
  { path: "/ecoloo" },
  { path: "/biosence" },
  { path: "/faqpage" },
  { path: "/feedback" },
  { path: "/farmboundary" },
  { path: "/cropadvisory" },
  { path: "/sustainability" },

  // Add more static routes here if necessary
  ...dynamicRoutes, // Add dynamically fetched routes
];

// Create the sitemap stream
const sitemap = new SitemapStream({ hostname: domain });

// Create a writable stream to save the sitemap as XML
const writeStream = createWriteStream(
  path.join(__dirname, "public", "sitemap.xml")
);

// Pipe the sitemap stream to the writeStream to write the data to the file
sitemap.pipe(writeStream);

// Loop through the routes and add them to the sitemap
allRoutes.forEach((route) => {
  console.log(`Adding route: ${route.path}`);

  // Get the last modified date for the route (you can set this to any date logic you prefer)
  const lastModifiedDate = new Date().toISOString();  // This will add the current date and time

  // Add the route with changefreq, priority, and lastmod
  sitemap.write({
    url: route.path,
    changefreq: "daily",
    priority: 0.8,
    lastmod: lastModifiedDate,  // Add lastmod here
  });
});

// End the sitemap stream to finalize the file writing
sitemap.end();

// Ensure the sitemap has been written to the file
streamToPromise(sitemap)
  .then(() => {
    console.log("Sitemap generated!");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
