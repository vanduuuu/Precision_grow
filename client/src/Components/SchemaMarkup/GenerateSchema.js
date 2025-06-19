export const GenerateSchema = (type, data = {}) => {
  const commonProvider = {
    "@type": "LocalBusiness",
    "name": "Precision Grow",
    "url": "https://precisiongrow.co.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://precisiongrow.co.in/static/media/Precision-Grow-Logo-new.1668b7fbe91663cd0c63.webp",
      "width": 250,
      "height": 60
    },
    "sameAs": [
      "https://www.facebook.com/PrecisionGrow",
      "https://twitter.com/precision_grow",
      "https://www.instagram.com/precisiongrow_/",
      "https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g",
      "https://www.linkedin.com/company/precisiongrow"
    ]
  };

  const commonContact = {
    "@type": "ContactPoint",
    "telephone": "+91-8097283444",
    "contactType": "customer support",
    "email": "mail@precisiongrow.co.in",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  };

  const commonAddress = {
    "@type": "PostalAddress",
    "streetAddress": "Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400710",
    "addressCountry": "IN"
  };

  switch (type) {
    case "HomePage":
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            ...commonProvider, // Already includes name, url, logo, and social links
            "description": "Precision Grow (A Unit of Tech Visit IT Pvt. Ltd) provides sustainable and advanced agri-tech solutions.",
            "email": "mail@precisiongrow.co.in",
            "contactPoint": [commonContact],
            "address": commonAddress
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": {
                  "@type": "WebPage",
                  "name": "Home",
                  "url": "https://precisiongrow.co.in/"
                }
              }
            ]
          }
        ]
      };
    
      case "AboutPage":
        return {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "name": "About Precision Grow: Innovating Sustainable Agri-Tech Solutions",
              "url": "https://precisiongrow.co.in/about",
              "description": "Learn more about Precision Grow, a leader in sustainable agri-tech solutions. Our mission is to empower farmers with cutting-edge technology for better yield and environmental sustainability."
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": {
                    "@type": "WebPage",
                    "@id": "https://precisiongrow.co.in/",
                    "url": "https://precisiongrow.co.in/",
                    "name": "Home"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": {
                    "@type": "WebPage",
                    "@id": "https://precisiongrow.co.in/about",
                    "url": "https://precisiongrow.co.in/about",
                    "name": "About"
                  }
                }
              ]
            }
          ]
        };
    

      case "ContactPage":
        return {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "name": "Contact Precision Grow - Your Agri-Tech Partner",
              "url": "https://precisiongrow.co.in/contact",
              "description": "Get in touch with Precision Grow for innovative agri-tech solutions. We're here to help you enhance farming practices and boost sustainability.",
              "about": {
                ...commonProvider,
                "contactPoint": commonContact,
                "address": commonAddress
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": {
                    "@type": "WebPage",
                    "name": "Home",
                    "url": "https://precisiongrow.co.in/"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": {
                    "@type": "WebPage",
                    "name": "Contact",
                    "url": "https://precisiongrow.co.in/contact"
                  }
                }
              ]
            }
          ]
        };
      

        case "BlogPage":
          const isDetailPage = data && data.slug; // Check if it's a blog detail page
      
          return {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": isDetailPage ? "Article" : "CollectionPage",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": isDetailPage 
                    ? `https://precisiongrow.co.in/post/${data.slug}` 
                    : "https://precisiongrow.co.in/blog"
                },
                "name": isDetailPage ? data.title : "Precision Grow Blog",
                "url": isDetailPage 
                  ? `https://precisiongrow.co.in/post/${data.slug}` 
                  : "https://precisiongrow.co.in/blog",
                "description": isDetailPage 
                  ? data.metaDescription || "Read about the latest advancements in agriculture, satellite monitoring, and AI-driven farming." 
                  : "Explore the latest insights on agriculture, satellite monitoring, and AI-driven farming.",
                ...(isDetailPage && data.imageURL ? { "image": data.imageURL } : {}), // Include only if available
                ...(isDetailPage && data.authorName ? { "author": { "@type": "Person", "name": data.authorName } } : {}), 
                ...(isDetailPage && data.datePublished ? { "datePublished": data.datePublished } : {}),
                ...(isDetailPage && data.dateModified ? { "dateModified": data.dateModified } : {}),
                "publisher": commonProvider
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://precisiongrow.co.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://precisiongrow.co.in/blog"
                  },
                  ...(isDetailPage
                    ? [
                        {
                          "@type": "ListItem",
                          "position": 3,
                          "name": data.title,
                          "item": `https://precisiongrow.co.in/post/${data.slug}`
                        }
                      ]
                    : [])
                ]
              }
            ]
          };
      

          case "ServicePage":
            return {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": data.url || "https://precisiongrow.co.in/default-service",
                  "url": data.url || "https://precisiongrow.co.in/default-service",
                  "name": data.name || "Precision Grow Service",
                  "serviceType": data.serviceType || "Agriculture Service",
                  "description": data.description || "Precision Grow provides expert agri-tech services.",
                  "provider": { ...commonProvider, "contactPoint": commonContact },
                  "areaServed": { "@type": "Country", "name": "India" },
                  "serviceAudience": { "@type": "Audience", "name": "Farmers and Agri-Businesses" },
                  "image": "https://precisiongrow.co.in/static/media/99_offer_AD.07511ffb52a9a81d854f.webp"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://precisiongrow.co.in/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://precisiongrow.co.in/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": data.name || "Service",
                      "item": data.url || "https://precisiongrow.co.in/service"
                    }
                  ]
                }
              ]
            };
        

    case "ProductPage":
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "name": data.productType,
            "description": data.description,
            "image": data.image,
            "url": data.url,
            "brand": { "@type": "Brand", "name": "Precision Grow" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://precisiongrow.co.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": data.name || "Product",
                "item": data.url || "https://precisiongrow.co.in/product"
              }
            ]
          }
        ]
      };
  
      
        case "SustainabilityPage":
          return {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Sustainability at Precision Grow: Innovating Agri-Tech Solutions",
                "url": "https://precisiongrow.co.in/sustainability",
                "description": "Discover how Precision Grow champions sustainability through innovative agri-tech solutions, enhancing farming practices and promoting eco-friendly agriculture.",
                "about": {
                  ...commonProvider,
                  "contactPoint": commonContact,
                  "address": commonAddress
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://precisiongrow.co.in/" },
                  { "@type": "ListItem", "position": 2, "name": "Sustainability", "item": "https://precisiongrow.co.in/sustainability" }
                ]
              }
            ]
          };
        

      
    
          case "PolicyPage":
            return {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Policy - Precision Grow Agri-Tech Solutions",
              "url": "https://precisiongrow.co.in/policy",
              "description": "Read Precision Grow's policies to understand how we protect your data and ensure your privacy while using our agri-tech solutions.",
              
              // ✅ Breadcrumbs structured properly at the top
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://precisiongrow.co.in/" },
                  { "@type": "ListItem", "position": 2, "name": "Policy", "item": "https://precisiongrow.co.in/policy" }
                ]
              },
          
              "about": {
                ...commonProvider,
                "contactPoint": commonContact,
                "address": commonAddress
              }
            };
          
    
    default:
      return null;
  }
};
