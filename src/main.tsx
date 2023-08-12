import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Container from "@mui/material/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SignIn from "./SignIn.tsx";
import Users from "./Users.tsx";
import SignUp from "./SignUp.tsx";
import Layout from "./Layout.tsx";
import Organizations from "./Organizations.tsx";
import Patients from "./Patients.tsx";
import Games from "./Games.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/register", element: <SignUp /> },
  { path: "/login", element: <SignIn /> },
  { path: "/users", element: <Users /> },
  { path: "/organizations", element: <Organizations /> },
  { path: "/patients", element: <Patients /> },
  { path: "/games", element: <Games /> },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>
);
