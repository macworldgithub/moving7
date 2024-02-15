import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const RegionAccordion = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='md:w-[53%] mx-auto'>
            <h2 className='text-lg font-medium mt-4'>Select your areas</h2>
            <p className='text-gray-500'>You can select 5 areas during free trial</p>
            <Collapse expandIconPosition="right" style={{backgroundColor: "white", borderColor: "#13C26580", borderBottomColor: "#13C26580", borderWidth: "1.5px" }} defaultActiveKey={['1']} onChange={onChange}>
                <Panel style={{ fontWeight: "500" }} header="Pakistan" key="1">
                    <div className='flex  flex-wrap gap-x-10 lg:gap-x-60 '>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" style={{ width: "14px" }} />
                            <p className='text-md'>Lahore</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};
export default RegionAccordion;