import { EditOutlined } from '@ant-design/icons';
import { DatePicker } from "antd";
import { Avatar, Progress, Button, Result } from 'antd';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { uploadImageAndGetURL } from '../../firebase/utils';
import { useMutation } from 'react-query';
import { postProofs } from '../../apiFunctions/partner';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';


const DocumentVerification = () => {
    const navigate = useNavigate()
    const [user] = useOutletContext()
    const postProofsMutation = useMutation({
        mutationKey: "postProofs",
        mutationFn: postProofs,
        onSuccess: (d) => {
            console.log(d)
            let temp = user
            temp.proof = true
            window.localStorage.setItem("userData", JSON.stringify(temp))
            toast.success("Proofs Uploaded Successfully!")
            navigate(`/partner/overview/${user._id}`)
        },
        onError: (e) => {
            console.log(e)
            toast.error("Ops! Error couldn't be uploaded!")
        }
    })
    const [files, setFiles] = useState([{
        name: "Trade license of company",
        status: false,
        expirationDate: null,
        file: null
    }, {
        name: "VAT Certificate",
        expirationDate: null,
        status: false,
        file: null
    }, {
        name: "National ID of Authorize Person",
        status: false,
        expirationDate: null,
        file: null
    }, {
        name: "Insurance certificates",
        status: false,
        expirationDate: null,
        file: null
    }])
    const [selectedItem, setSelectedItem] = useState(0)

    useEffect(() => {
        if (user?.proof) {
            navigate(`/partner/overview/${user._id}`)
        }
    }
        , [])

    const handleFileChange = (idx, value) => {
        let temp = files
        if (!value) {
            return
        }
        temp[idx].file = value
        temp[idx].status = true
        setFiles([...temp])
    }
    const submit = async () => {

        for (const file of files) {
            if (!file.file) {
                toast.error(`${file.name} Must Be Provided!`)
                return
            }
            if (!file.expirationDate) {
                toast.error(`${file.name} Expiration Date Must Be Provided!`)
                return
            }
        }
        let temp = files.map((file) => {
            return file.file
        })
        let a = new Date();
        const num = Math.round(Math.random() * 10000 + a.getMilliseconds());
        console.log(temp,"HERE FILES")
        const res = await Promise.all([
            uploadImageAndGetURL(`${user._id}/proofs/${num + 1}`, temp[0]),
            uploadImageAndGetURL(`${user._id}/proofs/${num + 2}`, temp[1]),
            uploadImageAndGetURL(`${user._id}/proofs/${num + 3}`, temp[2]),
            uploadImageAndGetURL(`${user._id}/proofs/${num + 4}`, temp[3]),
        ])

        let keys = [
            "license",
            "VATcert",
            "emiratesId",
            "insuranceCert",
        ]
        let labels = [
            "License",
            "VAT Certificate",
            "Emirates Id",
            "Insurance Certificate",
        ]

        let result = {}
        res.forEach((url, idx) => {
            const tempNum = parseInt(num) + parseInt(idx) + 1
            result[keys[idx]] = {
                name: labels[idx],
                url,
                verified: false,
                firebasePath: user._id + "/proofs/" + tempNum,
                expirationDate: files[idx].expirationDate
            }
        })
        postProofsMutation.mutate(result)
    }

    console.log(files, "Selectedddddd")


    return (
        <div className="items-center flex justify-center">
            <div className="mt-20 bg-primary p-10 md:w-3/5 sm:w-4/5 ssm:w-4/5 rounded-3xl">
                <h1 className="text-3xl font-medium ">
                    Upload documents to get verified
                </h1>
                <p className="w-4/5 text-gray-500 mt-3">
                    Moving24 offers consumers the best possible service by exclusively allowing
                    genuine, quality professionals on our platform. Verify the legitimacy of your
                    company and get access to unlock your first free quote requests.
                </p>

                <div className="flex flex-wrap">
                    <div className="md:w-48 sm:w-48 lg:w-1/2">
                        <div className="flex items-start mt-3">
                            <Avatar size={30} className="bg-blue-300 me-3 mt-">{selectedItem + 1}</Avatar>
                            <p>
                                Upload a {
                                    files[selectedItem]?.name
                                }
                            </p>
                        </div>
                        <div className='h-max min-h-80 flex justify-center rounded-3xl mt-4 mb-1 bg-white'>
                            <div className='flex flex-col items-center my-28 justify-center'>


                                {
                                    files[selectedItem]?.file ? (
                                        <Result
                                            className='p-0 m-0'
                                            status="success"
                                            title={`Successfully Uploaded ${files[selectedItem]?.name}`}
                                        />
                                    ) : (
                                        <>
                                            <p className='text-gray-500 my-1'>
                                                Drag files to upload
                                            </p>
                                            <p className='text-gray-500 my-1'>
                                                or
                                            </p>
                                            <div className='relative'>
                                                <input className='absolute opacity-0 z-0' onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    const size = file.size / (1000 * 1000)
                                                    if (size > 20) {
                                                        toast.error("File greater than 20mb cannot be uploaded! ")
                                                        return
                                                    }
                                                    console.log(size, "size")
                                                    handleFileChange(selectedItem, file)
                                                }} type={"file"}  >
                                                </input>
                                                <button className=' z-10 border-0 my-1 bg-blue-300 rounded-full py-1 text-white px-5'>
                                                    Browse
                                                </button>
                                            </div>
                                        </>

                                    )
                                }


                            </div>
                        </div>
                    </div>
                    <div className='md:w-48 sm:w-48 lg:w-1/2 px-10'>
                        <div className='mt-16'>

                            {
                                files.map((elem, idx) => {
                                    return (
                                        <div className={` mb-5 cursor-pointer`} onClick={() => setSelectedItem(idx)}>
                                            <h1 className='font-medium text-lg p-0 m-0'>
                                                {elem.name}
                                            </h1>
                                            <DatePicker onChange={(_, dateStr) => {
                                                setFiles((prev) => {
                                                    let temp = prev
                                                    temp[idx].expirationDate = new Date(dateStr)
                                                    return [...temp]
                                                })
                                            }}
                                                className="w-[85%]"
                                                placeholder="Select Expiration Data"
                                            />

                                            <Progress percent={elem.status ? 100 : 0} className="p-0 m-0" />
                                            <p className='text-gray-500 text-sm p-0 m-0'>
                                                {elem?.file ? elem.file?.name?.slice(0, 40) + "..." : "Not selected"}  <br />
                                                {elem?.file ? elem.file?.size/(1000*1000) : 0} mbs
                                                {
                                                    elem?.file &&
                                                    <div className=' inline relative mx-3 left-0'>
                                                        <input type={"file"}
                                                            onChange={(e) => {
                                                                const file = e.target.files[0]
                                                                const size = file.size / (1000 * 1000)
                                                                if (size > 20) {
                                                                    toast.error("File greater than 20mb cannot be uploaded! ")
                                                                    return
                                                                }
                                                                console.log(size, "size")
                                                                handleFileChange(idx, file)
                                                            }} className="absolute w-10 z-10 cursor-pointer opacity-0" />
                                                        <EditOutlined className='absolute font-bold z-0 left-1 cursor-pointer' />
                                                    </div>

                                                }

                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={submit} className='bg-blue-300 text-white  px-16 rounded-full py-1 '>
                            To The Quotes Request
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentVerification
