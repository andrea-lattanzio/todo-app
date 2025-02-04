import { StrictMode, useState } from "react";
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
import { AuthContext } from "./context/auth.context.ts";
import { User } from "./Routes/Login/types/login.types.ts";
import Register from "./Routes/Register/Register.tsx";

const Home = React.lazy(() => import("./Routes/Home/Home.tsx"));
const About = React.lazy(() => import("./Routes/About/About.tsx"));
const queryClient = new QueryClient();

const Root = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <StrictMode>
      <AuthContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Sidebar />
            <div className="lg:ml-[20%] ml-0">
              <Routes>
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
                <Route
                  path="register"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <Register />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
