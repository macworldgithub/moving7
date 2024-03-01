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
import CompanyProfile from "./pages/companyProfile";
import Targeting from "./pages/Targeting";
import QuotesRequest from "./pages/quotesRequest/quotesRequest";
import Overview from "./pages/Overview";
import Account from "./pages/Account";
import PartnerHeader from "./pages/header/becomePartner-Header";
import MobileMenu from "./pages/header/becomePartner-Header/forMobile";

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
            <Route path="targeting" element={<Targeting />} />
            <Route path="account" element={<Account />} />
            <Route path="header" element={<PartnerHeader />} />
                        <Route path="companyprofile/:id" element={<CompanyProfile />} />
            <Route path="mobile" element={<MobileMenu />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
