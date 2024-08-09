import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

let arr = [{ name: "Lahore" }, { name: "Karachi" }, { name: "Sialkot" }]

const RegionAccordion = ({name, areas,fetchPolygon, setData, data }) => {

    
    console.log(data, "accc");
    let renderData = areas ?? arr
    return (
        <div className='md:w-[52%] w-[90%] my-1 mx-auto'>
            <Collapse expandIconPosition="right" style={{ backgroundColor: "white", borderColor: "#13C26580", borderBottomColor: "#13C26580", borderWidth: "1.5px" }} >
                <Panel style={{ fontWeight: "500" }} header={name} key="1">
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
