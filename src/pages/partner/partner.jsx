import React from 'react'
import Header from '../header/header';

import banner from '../../assets/images/Logiin 1.png'
import PartnerForm from './form/form';
import ChooseUs from './form/parthnerChooseUs/chooseUs';
import Compare from '../moving_componies/compare';
import Steps from './steps/Partnerbenefits';
import Benefits from './benefits/benefits';
import CarouselSlider from '../Carousel/Carousel'
import Rating from './rating/rating';
import PartnerFaq from './faq';
import FreeTrialForm from './form/parthnerChooseUs/PartnerForm';
import OnlineAccForm from './form/OnlineAccForm';
import RingImg from '../../assets/images/Ellipse 5.png'
import Footer from '../footer/footer'
import RegionAccordion from './form/Accordion';


export default function Partner() {
  return (
    <div className='relative'>
      <div className=' flex items-center justify-center text-white mt-1 sm:mt-6 lg:mt-12'>
        <div className='absolute p-8 z-10 mt-6 md:ml-12 lg:ml-40 lg:mt-[-70px]'>
          <h3 className='text-md  font-light md:text-xl md:pb-1 lg:mb-4'>Become a partner</h3>
          <h2 className=' text-xl font-medium md:w-3/5 md:text-2xl lg:text-[38px]'>The smart way to take control of your business' growth</h2>
          <p className='text-md font-light md:text-xl md:w-1/2 lg:pt-8'>Our flexible platforms support movers is realizing their business potentials</p>
        </div>
        <img src={banner} className='h-64 w-11/12 lg:h-[470px]' alt="" />
        <img className=' hidden lg:block absolute lg:top-[-40px] lg:ml-28' src={RingImg} alt="" />
      </div>
      <PartnerForm />
      <FreeTrialForm />
      <OnlineAccForm />
      <ChooseUs />
      <Compare title={"5000+ Partner businesses and counting"} />
      <Steps />
      <Benefits />
      <CarouselSlider />
      <Rating />
      <PartnerFaq />
      <Footer />
    </div>
  )
}
