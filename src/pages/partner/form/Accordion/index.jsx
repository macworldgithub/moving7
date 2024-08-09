import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

let arr = [{ name: "Lahore" }, { name: "Karachi" }, { name: "Sialkot" }];

const RegionAccordion = ({ name, areas, fetchPolygon, setData, data }) => {

    console.log(areas, "accc");
    let renderData = areas ?? arr;

    return (
        <div className='md:w-[52%] w-[90%] my-1 mx-auto'>
            <Collapse
                expandIconPosition="right"
                style={{ backgroundColor: "white", borderColor: "#13C26580", borderBottomColor: "#13C26580", borderWidth: "1.5px" }}
            >
                <Panel style={{ fontWeight: "500" }} header={name} key="1">
                    <div className='flex flex-wrap gap-x-10 justify-between'>

                        {
                            renderData?.map((city, i) => {
                                return (
                                    <div className='flex items-center gap-2 w-2/5' key={i}>
                                        <input
                                            type="checkbox"
                                            checked={data?.regions?.includes(city)}
                                            onChange={(e) => {
                                                let temp = { ...data };
                                                if (e.target.checked) {
                                                    if (!temp?.regions) temp.regions = [];
                                                    temp.regions.push(city);
                                                } else {
                                                    temp.regions.splice(temp.regions.findIndex(region => region.name === city.name), 1);
                                                }
                                                setData(temp);
                                                fetchPolygon();
                                            }}
                                            className='accent-[#13C265]'
                                            style={{ width: "14px" }}
                                        />
                                        <p className='text-md'>{city.name}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};

export default RegionAccordion;