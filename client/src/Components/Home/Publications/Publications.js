import React, { useContext, useMemo } from "react";
import { MagazineContext } from "./MagazineContext.js";
import PublicationCard from "./PublicationCard.js";

const Publications = () => {
  const { magazines, loading } = useContext(MagazineContext);

  // ✅ 1. Sort by latest date & limit to 6
  const latestMagazines = useMemo(() => {
    if (!magazines || magazines.length === 0) return [];

    return [...magazines]
      .sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(0);
        const bTime = b.timestamp?.toDate?.() || new Date(0);
        return bTime - aTime; // Descending: latest first
      })
      .slice(0, 6); // ✅ Limit to 6
  }, [magazines]);

  // ✅ 2. UI handling
  if (loading) return <p>Loading magazines...</p>;
  if (!loading && latestMagazines.length === 0) return <p>No magazines found.</p>;

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4 fs-1 boldlook">Latest Publications</h2>
      <div className="row">
        {latestMagazines.map((mag) => (
          <div className="col-md-12 col-lg-6 mb-4" key={mag.id}>
            <PublicationCard magazine={mag} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
  <p className="mb-3 fs-3">
    Want to explore more <strong className="italic">Publications?</strong> Visit our complete archive.
  </p>
  <a
    href="https://ecroptoday.co.in/e-magazine"
    className="btn btn-success"
    target="_blank"
    rel="noopener noreferrer"
  >
    View All Publications
  </a>
</div>
    </div>
  );
};

export default Publications;
