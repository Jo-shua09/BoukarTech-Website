import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when the route changes
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-Y30LZHK8N8", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
