import { useEffect } from "react";

const Values = () => {
  useEffect(() => {
    window.location.href = "/values.pdf";
  }, []);

  return null;
};

export default Values;
