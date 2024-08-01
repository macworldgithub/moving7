import React from "react";
import banner from '../../assets/images/Logiin 1.png'
import ChooseUs from './form/parthnerChooseUs/chooseUs';
import Compare from '../moving_componies/compare';
import Steps from './steps/Partnerbenefits';
import Benefits from './benefits/benefits';
import CarouselSlider from '../Carousel/Carousel'
import Rating from './rating/rating';
import PartnerFaq from './faq';
import FreeTrialForm from './form/parthnerChooseUs/PartnerForm/index';
import RingImg from '../../assets/images/Ellipse 5.png'
import Footer from '../footer/footer'

export default function Partner() {
  return (
    <div className="relative">
      <div className=" flex items-center justify-center text-white mt-1 sm:mt-6 lg:mt-12">
        <div className="absolute p-8 z-10 mt-6 md:ml-12 lg:ml-40 lg:mt-[-70px]">
          <h3 className="text-md  font-light md:text-xl md:pb-1 lg:mb-4">
          Join the Moving7 Partner Network
          </h3>
          <h2 className=" text-xl font-medium md:w-3/5 md:text-2xl lg:text-[38px]">
          Elevate Your Business with Us

          </h2>
          <p className="text-md font-light md:text-xl md:w-1/2 lg:pt-8">
          At Moving7, we believe that solid collaborations are crucial for offering excellent relocation services. We are delighted to encourage you to join us in transforming the moving industry. Working with Moving7 means joining a network that values professionalism, dependability, and customer satisfaction.
          </p>
        </div>
        <img src={banner} className='h-64 w-11/12 lg:h-[470px]' alt="" />
        <img className=' hidden lg:block absolute lg:top-[-40px] lg:ml-28' src={RingImg} alt="" />
      </div>
      <FreeTrialForm />
      <ChooseUs />
      <Compare title={"5000+ Partner businesses and counting"} />
      <Steps />
      <Benefits />
      <CarouselSlider />
      <Rating />
      <PartnerFaq />
      <Footer />
    </div>
  );
}
