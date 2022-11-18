import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from "./components/Loader";
import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const JobList = lazy(() => import("./pages/JobList"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  // Upload data from API
  const [jobData, setJobData] = useState<any[]>([]);

  useEffect(() => {
    loadJobData();
  }, []);

  const loadJobData = () => {
    axios
      .get(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
      )
      .then((response) => setJobData(response.data))
  };

  // Save data to LS
  const [favorites, setFavorites] = useState<string[]>(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleSaveToLS(item: string) {
    if (favorites.includes(item)) {
      Notify.success('Job removed from saved')
      setFavorites((prev) => prev.filter((i) => i !== item));
    } else {
      Notify.success('Job added to saved')
      setFavorites((prev) => [...prev, item]);
    }
  }

  function getInitialFavorites() {
    const favorites = localStorage.getItem("favorites");

    if (!favorites) return [];

    return JSON.parse(favorites) || [];
  }

  // Scroll to top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route
          path="/"
          element={
            <JobList
              jobData={jobData}
              favorites={favorites}
              handleSaveToLS={handleSaveToLS}
              itemsPerPage={7}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <JobDetails
              jobData={jobData}
              favorites={favorites}
              handleSaveToLS={handleSaveToLS}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
