import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setisOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setisOnline(true);
    };
    const handleOffline = () => {
      setisOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline; //return true or false
};
export default useOnline;
