import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "../src/pages/Home/index";
import Partner from "../src/pages/partner/partner";
import Login from "./pages/login";
import LayoutMain from "./layout/layout";
import DocumentVerification from "./pages/documentVerification";

import QuotesRequest from "./pages/quotesRequest/quotesRequest";

import Overview from "./pages/Overview";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route path="login" element={<Login />} />
            <Route path="" element={<Home />} />
            <Route path="partner" element={<Partner />} />
            <Route
              path="documentsVerification"
              element={<DocumentVerification />}
            />
            <Route path="overview" element={<Overview />} />
            <Route path="quoteRequest" element={<QuotesRequest />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
