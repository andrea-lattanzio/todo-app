import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner.tsx";
import Login from "./Routes/Login/Login.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./context/auth.context.tsx";
import Register from "./Routes/Register/Register.tsx";
import PrivateRoute from "./Routes/PrivateRoute.tsx";
import Profile from "./Routes/Profile/Profile.tsx";
import Layout from "./components/Layout.tsx";

const Home = React.lazy(() => import("./Routes/Entities/Task/pages/Home.tsx"));
const AddTask = React.lazy(() => import("./Routes/Entities/Task/pages/AddTask.tsx"));
const UpdateTask = React.lazy(() => import("./Routes/Entities/Task/pages/UpdateTask.tsx"));
const TaskDetail = React.lazy(() => import("./Routes/Entities/Task/pages/TaskDetail.tsx"));

const Categories = React.lazy(() => import("./Routes/Entities/Category/pages/Categories.tsx"));

const queryClient = new QueryClient();

const AuthProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return <>{children}</>;
  }
  return <AuthProvider>{children}</AuthProvider>;
};

const Root = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <AuthProviderWrapper>
              <Routes>
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
                <Route path="/" element={<Layout />}>
                  <Route
                    index
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/task-detail/:taskId"
                    element={
                      <PrivateRoute>
                        <TaskDetail />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/update-task/:taskId"
                    element={
                      <PrivateRoute>
                        <UpdateTask />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/add"
                    element={
                      <PrivateRoute>
                        <AddTask />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/categories"
                    element={
                      <PrivateRoute>
                        <Categories />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Routes>
            </AuthProviderWrapper>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
