import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./config/queryClient.js";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter future={{v7_relativeSplatPath:true,v7_startTransition:true}}>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </QueryClientProvider>
);
