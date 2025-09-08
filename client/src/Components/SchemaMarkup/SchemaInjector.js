import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../Contexts/Firebaseconfig.js";
import { doc, getDoc } from "firebase/firestore";
import useSchemaMarkup from "./useSchemaMarkup.js";

// ✅ Function to remove HTML tags
function stripHtmlTags(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

// ✅ Service Pages Data (Static)
const serviceData = {
  "crop-monitoring": {
    serviceType: "Crop Monitoring Solutions - Precision Grow Agri-Tech",
    description: "Enhance crop yield with Precision Grow's innovative crop monitoring solutions. Leverage satellite technology for smarter, sustainable farming practices.",
    url:"https://precisiongrow.co.in/crop-monitoring",
  },
  "fish-monitoring": {
    serviceType: "Fish Monitoring Solutions | Precision Grow Agri-Tech",
    description: "Enhance fish farming with Precision Grow's monitoring solutions. Optimize growth, ensure sustainability, and leverage satellite technology for success!",
    url:"https://precisiongrow.co.in/fish-monitoring"

  },
  "farm-boundary": {
    serviceType: "Farm Boundary Solutions for Sustainable Agriculture | Precision Grow",
    description: "Discover Precision Grow's innovative farm boundary solutions to enhance productivity and sustainability in agriculture. Transform your farming practices today!",
    url:"https://precisiongrow.co.in/farm-boundary"

  },
 "precision-grow-ai": {
    serviceType: "Revolutionize Farming with Precision Grow AI Solutions",
    description: "Discover Precision Grow AI, enhancing crop management with real-time insights, weather data, and satellite monitoring for sustainable agriculture in India.",
    url:"https://precisiongrow.co.in/precision-grow-ai"

  },
  "regenerative-agriculture": {
    serviceType: "Regenerative Agriculture Solutions | Precision Grow",
    description: "Discover Precision Grow's regenerative agriculture practices that enhance soil health, boost yields, and promote sustainability for a better future.",
    url:"https://precisiongrow.co.in/regenerative-agriculture"

  },

  "product-traceability": {
    serviceType: "Product Traceability Solutions for Sustainable Farming",
    description: "Discover Precision Grow's product traceability solutions to enhance transparency and sustainability in agriculture. Ensure quality from farm to table.",
    url:"https://precisiongrow.co.in/product-traceability"

  },
  "crop-advisory": {
    serviceType: "Expert Crop Advisory Services for Sustainable Farming",
    description: "Get tailored crop advisory solutions to enhance yields and sustainability. Empower your farming practices with Precision Grow's expert guidance.",
    url:"https://precisiongrow.co.in/crop-advisory"

  },
  "wildfire-solution": {
    serviceType: "Wildfire Solutions for Sustainable Agriculture | Precision Grow",
    description: "Discover Precision Grow's innovative wildfire solutions to protect crops and enhance sustainability. Safeguard your farm today!",
    url:"https://precisiongrow.co.in/wildfire-solution"

  },
  "agri-insurance": {
    serviceType: "Agri Insurance Solutions for Farmers | Precision Grow",
    description: "Secure your crops with Precision Grow's agri insurance. Protect your farming investments and ensure sustainability with tailored coverage options.",
    url:"https://precisiongrow.co.in/agri-insurance"

  },
  "agri-loan": {
    serviceType: "Agri Loans for Farmers - Precision Grow Solutions",
    description: "Get tailored agri loans to support your farming needs. Boost productivity and sustainability with Precision Grow's financial solutions.",
    url:"https://precisiongrow.co.in/agri-loan"

  },
  "agri-drone": {
    serviceType: "Innovative Agri-Drones for Precision Farming Solutions",
    description: "Discover Precision Grow's agri-drones to enhance crop management, boost yields, and promote sustainable farming practices in India.",
    url:"https://precisiongrow.co.in/agri-drone"

  },
  "krishak-bazar": {
    serviceType: "Shop Fresh Farm Produce Online at Krishak Bazar Now!",
    description: "Buy directly from farmers! Explore Krishak Bazar for fresh produce, agri tools, and top deals. Shop smart, support farmers",
    url:"https://precisiongrow.co.in/krishak-bazar"
  },
    "agriStack": {
    serviceType: "AgriStack: Smart Farm Data Platform for Better Yields",
    description: "Unlock data-driven farming with AgriStack. Boost yields, cut costs & optimize sustainability for Indian farmers.",
    url:"https://precisiongrow.co.in/agriStack"
  },
    "crop-consultancy": {
    serviceType: "Smart Crop Consultancy for Sustainable Farming | Precision Grow",
    description: "Get expert crop consultancy with agri‑tech insights to boost yield, save water & reduce pests. Easy tips for eco‑friendly farming success!",
    url:"https://precisiongrow.co.in/crop-consultancy"
  },
  "sustainable-farming-solutions": {
    serviceType: "Smart Sustainable Farming Solutions for Higher Yields",
    description: "Discover eco‑friendly farming tools & techniques to boost crop yield, cut costs, and protect soil—all in easy steps!",
    url:"https://precisiongrow.co.in/sustainable-farming-solutions"
  },
   "technology-integration": {
    serviceType: "Tech-Driven Farming: AI & IoT Boost Yields Fast",
    description: "Discover how Precision Grow’s AI, IoT & satellite tools help farmers make smarter, greener decisions for higher yields. Easy agri-tech made simple!",
    url:"https://precisiongrow.co.in/technology-integration"
  },
};

// ✅ Product Pages Data (Static)
const productData = {
  "ecrop": {
    productType: "eCrop: Smart Solutions for Enhanced Crop Management",
    description: "Discover eCrop by Precision Grow for innovative crop management solutions that boost yields and promote sustainable farming practices in India.",
    image:"https://precisiongrow.co.in/static/media/ecrop-machine.80f16d5b39786ff49d50.webp",
    url:"https://precisiongrow.co.in/ecrop"
  },
  "skywatch": {
    productType: "Skywatch - Real-Time Air Quality & Pollution Monitoring System | Precision Grow",
    description: "Skywatch by Precision Grow is an advanced real-time pollution monitoring system designed to track air quality, weather conditions, and environmental parameters. It provides instant data access via a dedicated mobile app, helping industries ensure compliance and maintain a safe environment. Equipped with predictive analytics, it offers weather forecasting and historical data for better decision-making. With a user-friendly interface and real-time alerts, Skywatch empowers businesses to monitor and manage pollution effectively.",
    image:"https://precisiongrow.co.in/static/media/SkyWatch_Product.08125d773142306c70c2.webp",
    url:"https://precisiongrow.co.in/skywatch"
  },
  "ecoloo": {
    productType: "Ecoloo: Sustainable Solutions for Eco-Friendly Farming",
    description: "Discover Ecoloo's innovative solutions for sustainable farming that enhance productivity while protecting the environment. Join the eco-friendly revolution!",
    image:"https://precisiongrow.co.in/static/media/ecoloo.ec57a81ea19b31c6322b.webp",
    url:"https://precisiongrow.co.in/ecoloo"
  },
};

const SchemaInjector = () => {
  const location = useLocation();
  const [schemaType, setSchemaType] = useState(null);
  const [schemaData, setSchemaData] = useState(null);

  useEffect(() => {
    const fetchSchemaData = async () => {
      let type = null;
      let data = {};

      // console.log("🔍 Current Path:", location.pathname);

      // ✅ HomePage Schema
      if (location.pathname === "/") {
        type = "HomePage";
      } 
      // ✅ AboutPage Schema
      else if (location.pathname === "/about") {
        type = "AboutPage";
      }
      else if (location.pathname === "/sustainability") {
        type = "SustainabilityPage";
      }
      else if (location.pathname === "/policy") {
        type = "PolicyPage";
      }
      // ✅ ContactPage Schema
      else if (location.pathname === "/contact") {
        type = "ContactPage";
      }
      // ✅ Blog Listing Page Schema
      else if (location.pathname === "/blog") {
        type = "BlogPage";
        data = {
          name: "Precision Grow Blog",
          description: "Explore insightful blogs on agriculture technology and sustainability.",
          url: "https://precisiongrow.co.in/blog",
        };
      }
      // ✅ Blog Post Page Schema (Firebase se data fetch karega)
      else if (location.pathname.startsWith("/post/")) {
        const blogSlug = location.pathname.replace("/post/", "");
        type = "BlogPage"; // 🔹 Changed from "BlogPosting" to "BlogPage" to match `GenerateSchema`

        try {
          console.log(`📡 Fetching Blog Data for: ${blogSlug}`);
          const docRef = doc(db, "posts", blogSlug);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("✅ Blog Data Fetched:", docSnap.data());
            data = {
              title: docSnap.data().title || "Untitled Blog",
              slug: blogSlug,
              metaDescription: docSnap.data().metaDescription || "",
              content: stripHtmlTags(docSnap.data().content), // ✅ Remove HTML tags
              imageURL: docSnap.data().imageURL || "",
              authorName: docSnap.data().authorName || "Unknown",
            };
          } else {
            console.warn(`⚠️ Blog not found in Firebase: ${blogSlug}`);
            setSchemaType(null);
            return;
          }
        } catch (error) {
          console.error(`❌ Error fetching blog data for ${blogSlug}:`, error);
          setSchemaType(null);
          return;
        }
      }
      // ✅ Service & Product Pages Schema
      else {
        const serviceSlug = location.pathname.replace("/", "");
        if (serviceData[serviceSlug]) {
          type = "ServicePage";
          data = serviceData[serviceSlug];
        } else if (productData[serviceSlug]) {
          type = "ProductPage";
          data = productData[serviceSlug];
        } else {
          console.warn(`⚠️ No schema found for: ${location.pathname}`);
          setSchemaType(null);
          return;
        }
      }

      // console.log(`✅ Applying Schema for: ${type}`, data);
      setSchemaType(type);
      setSchemaData(data);
    };

    fetchSchemaData();
  }, [location.pathname]);

  useSchemaMarkup(schemaType, schemaData);

  return null;
};

export default SchemaInjector;
