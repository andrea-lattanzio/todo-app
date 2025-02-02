import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Login from "./Routes/Login/Login.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Home = React.lazy(() => import("./Routes/Home/Home.tsx"));
const About = React.lazy(() => import("./Routes/About/About.tsx"));
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="lg:ml-[20%] ml-0">
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
              <Route
                path="login"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Login />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
