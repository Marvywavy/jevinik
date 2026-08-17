import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshToHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasChecked = useRef(false);

  useEffect(() => {
    // Don't run this check more than once
    if (hasChecked.current) return;

    hasChecked.current = true;

    const navigation = performance.getEntriesByType("navigation")[0];

    if (
      navigation?.type === "reload" &&
      location.pathname !== "/"
    ) {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  return null;
};

export default RefreshToHome;