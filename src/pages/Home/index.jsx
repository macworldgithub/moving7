import React from 'react'

import Experience from "../experience";
import ChooseUs from "../choose_us/choose";
import Compare from "../../pages/moving_componies/compare";
import Service from "../service/service";
import CarouselSlider from "../Carousel/Carousel";
import Footer from "../footer/footer";
import MovingType from "../moving_type/moving-type";

import MainBanner from "../../components/banner";

export default function Home() {
    return (
        <div>
            <MainBanner />
            <Compare title={"Compare moving companies like:"} />
            <MovingType />
            <Experience />
            <Service />
            <CarouselSlider />
            <ChooseUs />
            <Footer />
        </div>
    )
}
