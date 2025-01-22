
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router";
import router from "./routes/routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
     <Toaster  reverseOrder={false}></Toaster>
    </AuthProvider>
    </QueryClientProvider> 
  </React.StrictMode>,
)
