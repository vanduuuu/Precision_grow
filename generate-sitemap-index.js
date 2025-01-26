const fs = require('fs');
const path = require('path');

// Aapka domain name (ye wahi link hai jisme aapka sitemap hai)
const domain = 'https://precisiongrow.co.in/';

// Function to update sitemap index
function updateSitemapIndex() {
  // Path jahan sitemap aur sitemap index save hote hain
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const sitemapIndexPath = path.join(__dirname, 'public', 'sitemap_index.xml');

  // 1. Check karte hain ki `sitemap.xml` file exist karti hai ya nahi
  if (!fs.existsSync(sitemapPath)) {
    console.log('sitemap.xml file nahi mili. Sitemap index generate nahi ho sakta.');
    return; // Agar `sitemap.xml` nahi milta, to hum sitemap index generate nahi karenge
  }

  // 2. Get the last modified date of sitemap.xml file
  const sitemapStats = fs.statSync(sitemapPath);
  const lastModifiedDate = sitemapStats.mtime.toISOString(); // Get the last modified date of the file

  // 3. Check karte hain agar `sitemap_index.xml` already hai
  if (fs.existsSync(sitemapIndexPath)) {
    console.log('sitemap-index.xml already bana hua hai.');
  } else {
    // Agar `sitemap_index.xml` nahi hai, to hum generate karenge
    const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${domain}/sitemap.xml</loc>
    <lastmod>${lastModifiedDate}</lastmod>
  </sitemap>
</sitemapindex>`;

    // 4. Save karenge sitemap index ko file me
    fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
    console.log('Sitemap index generate ho gaya aur save ho gaya!');
  }

  // Agar `sitemap_index.xml` already hai, to hum sirf lastmod update karenge
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${domain}/sitemap.xml</loc>
    <lastmod>${lastModifiedDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  // Save the updated sitemap index file with the new lastmod date
  fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
  console.log('Sitemap index ka lastmod date update ho gaya!');
}

// Call karte hain function ko
updateSitemapIndex();
