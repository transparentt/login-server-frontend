import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./Home.tsx";
import SignIn from "./SignIn.tsx";
import Users from "./Users.tsx";
import SignUp from "./SignUp.tsx";
import Layout from "./Layout.tsx";
import Organizations from "./Organizations.tsx";
import Patients from "./Patients.tsx";
import Games from "./Games.tsx";
import Help from "./Help.tsx";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/register", element: <SignUp /> },
  { path: "/login", element: <SignIn /> },
  { path: "/users", element: <Users /> },
  { path: "/organizations", element: <Organizations /> },
  { path: "/patients", element: <Patients /> },
  { path: "/games", element: <Games /> },
  { path: "/help", element: <Help /> },
]);
const queryClient = new QueryClient();
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
