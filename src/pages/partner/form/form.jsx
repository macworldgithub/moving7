import React from 'react';
import { Form, Input, Button } from 'antd';

import './form.css'

const PartnerForm = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className='absolute w-72 sm:w-80 md:w-72 lg:w-80 md:mt-[-460px] md:ml-[393px] lg:right-20 p-6 mt-20 lg:mt-6 bg-white lg:top-64 border border-solid border-[#13C265] mx-auto shadow-lg shadow-bottom mr-4" style="background-color: #13C265; width: 100px; height: 100px;'>
                <div>
                    <h2 className='lg:text-lg font-semibold '>Get Started today</h2>
                    <p className='lg:text-sm font-light bottom-6'>Start your free trial now and receive free leads for 14 days.</p>
                </div>
                <Form className="mt-4" name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <>
                        <Input placeholder='Company name' className='mb-1 p-2 placeholder-black font-medium' />
                        <Input placeholder='Last name' className='mb-1 p-2 placeholder-black font-medium' />
                        <Input placeholder='Email' className='mb-1 p-2 placeholder-black font-medium' />
                        <Input placeholder='Phone number' className='mb-1 p-2 placeholder-black font-medium' />
                    </>
                    <Button className='w-full bg-[#13C265] text-white text-md font-medium' htmlType="submit">
                        Start your free trial
                    </Button>
                    <button className='flex justify-center mx-auto items-center underline text-blue-400'>sign in</button>
                </Form>
            </div>
        </div>

    );
};
export default PartnerForm;