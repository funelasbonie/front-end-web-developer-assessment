import { useState, useCallback, useRef, useEffect } from "react";

export function useToast(defaultDuration = 3000) {
  const [toastMessage, setToastMessage] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showToast = useCallback((message, duration = defaultDuration) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setToastMessage(message);
    timeoutRef.current = setTimeout(() => {
      setToastMessage("");
      timeoutRef.current = null;
    }, duration);
  }, [defaultDuration]);

  return { toastMessage, showToast };
}
