import React from 'react';
import { useQuery } from 'react-query';
import { IoIosArrowForward } from "react-icons/io";
import UserImg from '../../../assets/images/overview/Group 17.png'
import SmalllFooter from '../../footer/smalllFooter';
import { Collapse, Divider } from 'antd';
import { getContactManagerDetails } from '../../../apiFunctions/partner';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Help_Desk = () => {

    const contactManagerRes = useQuery({
        queryKey:["getContactManagerDetails"],
        queryFn:getContactManagerDetails
    })

    const data = contactManagerRes?.data?.data ?? {}

  const openWhatsApp = () => {
    window.open(`https://wa.me/${data?.contactManagerContactNumber}`, '_blank');
  };


    return (<>
        <div className='flex xl:px-32 flex-col lg:flex-row justify-evenly gap-8 lg:gap-0 items-baseline xxl:justify-around'>
            {/* <div orientation="left">Large Size</div> */}
            <div className='w-11/12 m-auto lg:w-[60%] xl:w-[65%] mt-10'>
                <Collapse
                    size="middle"
                    items={[
                        {
                            label: 'The Service',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Company Profile Page',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Review',
                            collapsible: "disabled",
                            showArrow: "false",
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Membership and Pricing',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Your 24/7 Online Account',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Filters',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Projects Request and Responding to Consumers',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Reclaim Service',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Billing and Invoicing',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
                <Collapse style={{ marginTop: 20 }}
                    size="middle"
                    items={[
                        {
                            label: 'Data Protection',
                            collapsible: "disabled",
                            showArrow: false,
                            expandIcon: "disabled"

                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                        {
                            key: '1',
                            label: 'This is large size panel header',
                            children: <p>{text}</p>,
                        },
                    ]}
                />
            </div>
            <div className='w-11/12 sm:w-2/5 lg:w-[30%] xl:w-[25%] m-auto shadow-xl md:h-[310px] lg:h-auto rounded-md px-4 py-6 lg:mt-8 border-[1.5px]'>
                <div className='border-b-2 w-full'>
                    <h2 className='font-semibold text-md md:text-lg pb-2'>Need help?</h2>
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        <p className='text-md md:text-lg text-gray-400 mt-4'>Contact our Account Manager</p>
                    </div>
                    <div className='flex gap-6 mt-3'>
                        <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" className='w-20 h-20 rounded-full cursor-pointer' />
                        <div>
                            <h2 className='text-md md:text-lg'>{data?.contactManagerName}</h2>
                            <button onClick={openWhatsApp} className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SmalllFooter />
    </>)
}
export default Help_Desk;
