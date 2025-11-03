import { useEffect } from "react";

const LabResults = () => {
  useEffect(() => {
    window.location.href = "/lab-results.pdf";
  }, []);

  return null;
};

export default LabResults;
