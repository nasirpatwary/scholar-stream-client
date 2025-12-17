import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "swiper/css";
import "react-datepicker/dist/react-datepicker.css";
import { HelmetProvider } from "react-helmet-async";
import { router } from './routes/router';
import { RouterProvider } from 'react-router';
import AuthProvider from './providers/AuthProvider';
import {Toaster} from "react-hot-toast"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
     <HelmetProvider>
       <RouterProvider router={router} />
     </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
