import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const RegionAccordion = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='md:w-2/4 mx-auto'>
            <h2 className='text-lg font-medium'>Select your areas</h2>
            <p className='text-gray-500'>You can select 5 areas during free trial</p>
            <Collapse style={{ backgroundColor: "white" }} defaultActiveKey={['1']} onChange={onChange}>
                <Panel style={{ fontWeight: "500" }} header="Pakistan" key="1">
                    <div className='flex  flex-wrap gap-x-10 lg:gap-x-40 '>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Lahore</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Karachi</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};
export default RegionAccordion;