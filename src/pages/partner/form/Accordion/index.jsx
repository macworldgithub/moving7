import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

let arr = [{ name: "Lahore" }, { name: "Karachi" }, { name: "Sialkot" }]

const RegionAccordion = ({ areas,fetchPolygon, setData, data }) => {
    // const onChange = (key) => {
    //     console.log(renderData);
    // };
    console.log(data, "accc");
    let renderData = areas ?? arr
    return (
        <div className='md:w-[47%] mx-auto'>
            <h2 className='text-lg font-medium mt-4'>Select your areas</h2>
            <p className='text-gray-500'>You can select 5 areas during free trial</p>
            <Collapse expandIconPosition="right" style={{ backgroundColor: "white", borderColor: "#13C26580", borderBottomColor: "#13C26580", borderWidth: "1.5px" }} >
                <Panel style={{ fontWeight: "500" }} header="UAE" key="1">
                    <div className='flex  flex-wrap gap-x-10 lg:gap-x-60 '>
                        {
                            renderData?.map((city, i) => {
                                return (
                                    <div className='flex gap-2' key={i}>
                                        <input type="checkbox"
                                            checked={data?.regions?.includes(city)}
                                            onChange={(e) => {
                                                if (e.target.checked === true) {

                                                    let temp = data
                                                    if (!temp?.regions){
                                                        temp.regions = []
                                                    }

                                                    temp?.regions?.push(city)
                                                    setData({
                                                        ...data,
                                                        regions: temp?.regions
                                                    })
                                                } else {
                                                    let temp = data
                                                    temp?.regions?.splice(temp?.regions?.findIndex(region => region.name === city.name), 1);
                                                    setData({
                                                        ...data,
                                                        regions: temp.regions
                                                    })
                                                }
                                                fetchPolygon()

                                            }} className='accent-[#13C265]' style={{ width: "14px" }} />
                                        <p className='text-md'>{city.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};
export default RegionAccordion;
