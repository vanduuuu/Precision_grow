import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom";

const Canonical = () => {
  const location = useLocation();
  const canonicalUrl = `https://precisiongrow.co.in${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Canonical;
