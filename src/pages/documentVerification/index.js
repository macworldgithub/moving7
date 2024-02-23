import { EditOutlined } from '@ant-design/icons';
import { Avatar, Progress, Button, Result } from 'antd';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { uploadImageAndGetURL } from '../../firebase/utils';
import { useMutation } from 'react-query';
import { postProofs } from '../../apiFunctions/partner';
import { useNavigate } from 'react-router-dom';


const DocumentVerification = () => {
    const navigate = useNavigate()
    const postProofsMutation = useMutation({
        mutationKey: "postProofs",
        mutationFn: postProofs,
        onSuccess: (d) => {
            console.log(d)
            toast.success("Proofs Uploaded Successfully!")
        },
        onError:(e) => {
            console.log(e)
            toast.error("Ops! Error couldn't be uploaded!")
        }
    })
    const [files, setFiles] = useState([{
        name: "Trade license of company",
        status: false,
        file: null
    }, {
        name: "VAT Certificate",
        status: false,
        file: null
    }, {
        name: "Emirates ID of Manager / Partner",
        status: false,
        file: null
    }, {
        name: "Insurance certificates",
        status: false,
        file: null
    }])
    const [currStep, setCurrStep] = useState(0)
    const [selectedItem, setSelectedItem] = useState(null)

    const handleFileChange = (idx, value) => {
        let temp = files
        if (!value) {
            return
        }
        temp[idx].file = value
        temp[idx].status = true
        setCurrStep(currStep + 1)
        setFiles([...temp])
    }

    const submit = async () => {
        files.forEach((file) => {
            if (!file.file) {
                toast.error(`${file.name} Must Be Provided!`)
                return
            }
        })
        let temp = files.map((file) => {
            return file.file
        })
        let a = new Date();
        const num = Math.round(Math.random() * 10000 + a.getMilliseconds());
        const res = await Promise.all([
            uploadImageAndGetURL(num + 1, temp[0]),
            uploadImageAndGetURL(num + 2, temp[1]),
            uploadImageAndGetURL(num + 3, temp[2]),
            uploadImageAndGetURL(num + 4, temp[3])
        ])

        let names = [
            "license",
            "VATcert",
            "emiratesId",
            "insuranceCert",
        ]
        let result = {}
        res.forEach((url, idx) => {
            result[names[idx]] = url
        })
        postProofsMutation.mutate(result)
    }




    return (
        <div className="items-center flex justify-center">
            <div className="mt-20 bg-Glight p-10 md:w-3/5 sm:w-4/5 ssm:w-4/5 rounded-3xl">
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
                            <Avatar size={30} className="bg-primary me-3 mt-">{selectedItem !== null ? selectedItem + 1 : currStep + 1}</Avatar>
                            <p>
                                Upload an {
                                    selectedItem !== null ? files[selectedItem]?.name : files[currStep]?.name
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
                                                    handleFileChange(currStep, file)
                                                }} type={"file"}  >
                                                </input>
                                                <button className=' z-10 border-0 my-1 bg-primary rounded-full py-1 text-white px-5'>
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
                                    console.log(idx, currStep, elem)
                                    return (
                                        <div className={`${currStep < idx ? "hidden" : ""} mb-5 cursor-pointer`} onClick={() => setSelectedItem(idx)}>
                                            <h1 className='font-medium text-lg p-0 m-0'>
                                                {elem.name}
                                            </h1>
                                            <Progress percent={elem.status ? 100 : 0} className="p-0 m-0" />
                                            <p className='text-gray-500 text-sm p-0 m-0'>
                                                {elem?.file ? elem.file?.name?.slice(0, 40) + "..." : "Not selected"}  <br />
                                                {elem?.file ? elem.file?.size : 0} kbs
                                                {
                                                    elem?.file &&
                                                    <div className=' inline relative mx-3 left-0'>
                                                        <input type={"file"}
                                                            onChange={(e) => {
                                                                const file = e.target.files[0]
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
                        <button onClick={submit} className='bg-primary text-white  px-16 rounded-full py-1 '>
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
