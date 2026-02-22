import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../../lib/analytics";

export function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}
