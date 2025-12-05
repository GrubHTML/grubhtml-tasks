import { useState, useEffect } from "react";

export default function useFadeInOnMount() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  return isVisible;
}
