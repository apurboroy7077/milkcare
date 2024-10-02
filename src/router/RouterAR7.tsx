import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/landing-page/LandingPage";

const Testpage = lazy(() => import("../pages/testpage/Testpage"));
const RouterAR7 = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default RouterAR7;
