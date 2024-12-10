/** @format */

import { useCallback } from "react";

const useStorage = () => {
  const STORAGE_KEY = "SAVE_IN_LOCAL_STORAGE";
  const SESSION_KEY = "SAVE_DATA_TO_SESSION";

  const saveLocalStorage = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
  };

  const clearLocalStorage = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const saveSessionStorage = (value) => {
    sessionStorage.setItem(SESSION_KEY, value);
  };

  const clearSessionStorage = () => {
    sessionStorage.removeItem(SESSION_KEY);
  };

  return {
    saveLocalStorage,
    clearLocalStorage,
    saveSessionStorage,
    clearSessionStorage,
  };
};

export default useStorage;
