import React, { useState, useEffect } from "react";
import ListCompTitle from "../ListComponent/ListCompTitle";
import Banner from "../Banner/Banner";
import Titletag from "../Titletag/Titletag";
import glossaryApi from "../../../src/Components/Sustainability/GlossayApiList"; // Adjust the path according to your folder structure
import "./Glossary.css";
import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/hero_44.webp'



// Simulate API call to fetch data
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(glossaryApi);
    }, 500); // Simulate a 0.5-second delay
  });
};

const Glossary = () => {
  const [items, setItems] = useState([]); // State to store fetched data

  // Fetch data from the static file
  useEffect(() => {
    fetchData()
      .then((data) => setItems(data)) // Update state with the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/glossary", label: "Glossary" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <Banner
        title="Sustainability Glossary"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems}
      />

      <div className="abt-outer">
        <section>
          <div className="container">
            <Titletag
              title="Sustainability Glossary"
              bgImage={NameBanner}
              className="pt-5"
            />
            <p className="txt1">
              We created The Sustainability Glossary to increase your
              understanding of sustainability and CSR. The Glossary includes
              terms that are often used in CSR and are talked about when
              creating a sustainability strategy.
            </p>
          </div>
        </section>
      </div>

      <div className="glo-outer">
      <div class="shapehere"></div>
        <section>
          <div className="container">
            <div className="row">
              {/* Dynamically render each item as a col-lg-6 div */}
              {items.map((item, index) => (
                <div className="col-lg-6" data-aos="fade-up" key={index}>
                  <ListCompTitle
                    items={[item]} // Pass the single item as an array
                    h4Style={{ color: "#2b3e3e", fontWeight: "700" }}
                    ulStyle={{ borderLeft: "1px solid black" }}
                    h6Style={{
                      color: "#6f8313",
                      textDecoration: "underline",
                      background: "#6f850b1f",
                      display: "inline",
                      padding: "3px",
                    }}
                    pStyle={{ fontSize: "18px", color: "#636654" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Glossary;
