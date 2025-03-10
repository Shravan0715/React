import React, { Suspense, useState, useEffect } from "react";

// Lazy Load Components
const LazyHome = React.lazy(() => import("../pages/Home"));
const LazyAbout = React.lazy(() => import("../pages/About"));
const LazyContact = React.lazy(() => import("../pages/Contact"));

const LoadableComponent = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 2 seconds whenever the page changes
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [page]);

  return (
    <Suspense fallback={<div className="loading">Loading {page.charAt(0).toUpperCase() + page.slice(1)} Page...</div>}>
      {isLoading ? (
        <div className="loading">Loading {page.charAt(0).toUpperCase() + page.slice(1)} Page...</div>
      ) : (
        <>
          {page === "home" && <LazyHome />}
          {page === "about" && <LazyAbout />}
          {page === "contact" && <LazyContact />}
        </>
      )}
    </Suspense>
  );
};

export default LoadableComponent;
