import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import Header from "./pages/header/header";
// import HeroSection from "./pages/hero-section";
// import Experience from "./pages/experience";
// import ChooseUs from "./pages/choose_us/choose";
// import Compare from "./pages/moving_componies.jsx/compare";
// import Service from "./pages/service/service";
// import CarouselSlider from "./pages/Carousel/Carousel";
// import Footer from "./pages/footer/footer";
// import MovingType from "./pages/moving_type/moving-type";

// import MainBanner from "./components/banner";
import Home from "../src/pages/Home/index";
import Partner from "../src/pages/partner/partner";

function App() {

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: Infinity,
				cacheTime: Infinity,
			},
		},
	});




  return (
      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
      	</QueryClientProvider>
  );
}

export default App;
