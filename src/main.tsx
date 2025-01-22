import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner.tsx";
import Navbar from "./components/Navbar.tsx";

const Home = React.lazy(() => import("./Routes/Home/Home.tsx"));
const About = React.lazy(() => import("./Routes/About/About.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
