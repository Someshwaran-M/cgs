import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import startImg from "../../assets/images/logo/page1.jpeg";
import logoImg from "../../assets/images/logo/page.png";

import "../../assets/css/PageLoader.css";

const LoaderContext = createContext();

export function PageLoaderProvider({ children }) {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  /* FIRST WEBSITE LOAD */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFirstLoad(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  /* MENU PAGE CHANGE */

  useEffect(() => {
    if (firstLoad) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoaderContext.Provider value={{}}>
      {loading && (
        <div
          className={`page-loader ${firstLoad ? "start-loader" : "menu-loader"}`}
        >
          <img
            src={firstLoad ? startImg : logoImg}
            alt="Loading"
            className="loader-logo"
          />

          {firstLoad && (
            <>
              <p className="loader-text">Loading</p>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </>
          )}
        </div>
      )}

      {children}
    </LoaderContext.Provider>
  );
}

export function usePageLoader() {
  return useContext(LoaderContext);
}
