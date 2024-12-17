import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
const { Panel } = Collapse;

let arr = [{ name: "Lahore" }, { name: "Karachi" }, { name: "Sialkot" }];

const RegionAccordion = ({
    RegionPolygonData,
    name,
    areas,
    fetchPolygon,
    setData,
    data,
    setLatLng,
}) => {
    let renderData = areas ?? arr;
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        setLatLng({
            lat: RegionPolygonData
                ? RegionPolygonData[RegionPolygonData?.length - 1]?.multiPolygon[0][0]
                    ?.lat
                : 25.276987,
            lng: RegionPolygonData
                ? RegionPolygonData[RegionPolygonData?.length - 1]?.multiPolygon[0][0]
                    ?.lng
                : 55.296249,
        });
    }, [RegionPolygonData]);

    const partnerRegionIds = data?.regions?.map(elem => elem._id)

    return (
        <div className="md:w-[52%] w-[90%] my-1 mx-auto">
            <Collapse
                expandIconPosition="right"
                style={{
                    backgroundColor: "white",
                    borderColor: "#13C26580",
                    borderBottomColor: "#13C26580",
                    borderWidth: "1.5px",
                }}
            >
                <Panel style={{ fontWeight: "500" }} header={name} key="1">
                    <div className="flex flex-wrap gap-x-10 justify-between">
                        <div className="flex w-full mb-5 items-center gap-2 ">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                className="accent-[#13C265]"
                                style={{ width: "14px" }}
                                onChange={(e) => {
                                    let temp = { ...data };
                                    if (e.target.checked) {
                                        if (!temp?.regions) temp.regions = [];

                                        let arr = [...temp.regions];

                                        renderData.forEach((elem) => {
                                            let includes = false
                                            temp.regions.forEach((elem2) => {
                                                if (elem._id === elem2?._id) {
                                                    includes = true
                                                }
                                            })
                                            if (!includes) {
                                                arr = [...arr , elem]   
                                            }
                                        })

                                        temp.regions = arr;
                                        setSelectAll(true);
                                    } else {
                                        const arr = temp.regions.filter((reg) => {
                                            let includes = false
                                            renderData.forEach((elem2) => {
                                                if (reg._id === elem2?._id) {
                                                    includes = true
                                                }
                                            })
                                            if (!includes) {
                                                return true
                                            }else return false
                                        });
                                        console.log(arr, "ANA")
                                        temp.regions = arr;
                                        setSelectAll(false);
                                    }
                                    console.log("temp", temp);
                                    setData(temp);
                                    fetchPolygon();
                                }}
                            />
                            <p className="text-md">Select All</p>
                        </div>

                        {renderData?.map((city, i) => {
                            console.log(partnerRegionIds.includes(city?._id), "hello")
                            return (
                                <div className="flex items-center gap-2 w-2/5" key={i}>
                                    <input
                                        type="checkbox"
                                        checked={partnerRegionIds.includes(city?._id)}
                                        onChange={(e) => {
                                            let temp = { ...data };
                                            if (e.target.checked) {
                                                if (!temp?.regions) temp.regions = [];
                                                temp.regions.push(city);
                                            } else {
                                                temp.regions.splice(
                                                    temp.regions.findIndex(
                                                        (region) => region.name === city.name,
                                                    ),
                                                    1,
                                                );
                                            }

                                            setData(temp);
                                            fetchPolygon();
                                        }}
                                        className="accent-[#13C265]"
                                        style={{ width: "14px" }}
                                    />
                                    <p className="text-md">{city.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};

export default RegionAccordion;
