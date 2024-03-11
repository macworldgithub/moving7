import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
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
import MobileMenu from "./pages/header/becomePartner-Header/forMobile";
import PartnerLayout from "./layout/partnerLayout";
import { QueryClient, QueryClientProvider } from "react-query";

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
                        <Route path="" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="partnerSignUp" element={<Partner />} />
                        <Route path="mobile" element={<MobileMenu />} />
                    </Route>
                    <Route path="partner" element={<PartnerLayout />} >
                        <Route
                            path="documentsVerification"
                            element={<DocumentVerification />}
                        />
                        <Route path="overview/:id" element={<Overview />} />
                        <Route path="quoteRequest/:id" element={<QuotesRequest />} />
                        <Route path="targeting/:id" element={<Targeting />} />
                        <Route path="account/:id" element={<Account />} />
                        <Route path="companyprofile/:id" element={<CompanyProfile />} />
                    </Route>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
