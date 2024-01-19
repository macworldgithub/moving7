import React from 'react';
import { Carousel } from 'antd';
import "../Carousel/carousel.css"
import TCard from '../TCard';
const contentStyle = {
    height: '160px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    color: '#000',
};

const data = [
    {
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
        name: "John Doe",
        companyName: "Tech Innovations Inc."
    },
    {
        description: "Graphic Designer specializing in brand identity",
        name: "Jane Smith",
        companyName: "Creative Designs Co."
    },
    {
        description: "Experienced Project Manager with a focus on efficiency",
        name: "Robert Johnson",
        companyName: "Global Solutions Ltd."
    }
];

const CarouselSlider = () => (
    <>
        <div className='mx-auto p-2 mb w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 '>
            <div className='text-center text-2xl pb-4 font-bold pt-6'>
                <h2>What Our Customer Says</h2>
            </div>
            <Carousel>
                {data.map((card) => {
                    return (
                        <TCard description={card.description} name={card.name} companyname={card.companyName} />
                    )
                })}
            </Carousel>
        </div>
    </>
);
export default CarouselSlider;