import { ClearOutlined, EditOutlined } from "@ant-design/icons";
import { isReactNative } from "@firebase/util";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ReactSignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
import { fetchOnePartner, signContract } from "../apiFunctions/partner";
import AntdModal from "../components/AntdModal";
import ServiceAgreement from "../components/ContractPDF";

const Contract = () => {
    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
    const [rejectionReason, setRejectionReason] = useState(false);
    const [personName, setPersonName] = useState("");

    const navigate = useNavigate();

    const sigCanvas = useRef({});

    const partnerDataRes = useQuery({
        queryKey: ["fetchOnepartner", id],
        queryFn: fetchOnePartner,
    });

    const refetchPartner = partnerDataRes?.refetch;

    const submitContractMutation = useMutation({
        mutationKey: "SignContracy",
        mutationFn: signContract,
        onSuccess: (data) => {
            refetchPartner();
        },
        onError: (e) => toast.error(e?.response?.data?.message),
        onSettled: (d, e) => console.log(d, e),
    });

    const partnerData = partnerDataRes?.data?.data ?? {};


    const clearSignature = () => sigCanvas.current.clear();

    const saveSignature = () => {
        const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        return dataUrl;
    };

    const submit = async (status) => {



        let contract = {};
        if (status) {

            if (!personName) {
                toast.error("Fill the authorized person name!")
                return
            }
            if (saveSignature() == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC") {
                toast.error("Kindly sign the document first!")
                return
            }


            contract = {
                status: "Accepted",
                signedAt: new Date(),
                signature: saveSignature(),
                authorizedPersonName: personName,
                feedback: null,
            };
        } else {
            contract = {
                status: "Rejected",
                signedAt: new Date(),
                feedback: rejectionReason,
                signature: null,
                authorizedPersonName: null,
            };
        }

        submitContractMutation.mutate({ id, contract });
    };


    return (
        <>
            {partnerData?.contract?.status === "Accepted" ? (
                <ServiceAgreement
                    signature={partnerData?.contract?.signature}
                    date={new Date(partnerData?.contract?.signedAt).toLocaleString()}
                    companyName={partnerData?.companyName}
                    personName={partnerData?.contract?.authorizedPersonName}
                />
            ) : partnerData?.contract?.status === "Delivered" ? (
                <div className="w-full flex flex-col items-center py-10 ">
                    <div className="w-[70rem] max-lg:w-[90%] max-lg:w-[90%]  shadow-[0_0px_60px_5px_rgba(0,0,0,0.3)]">
                        <h1 className="text-center text-3xl font-formal mt-10 mb-10 font-bold">
                            Moving 7 Service Agreement
                        </h1>
                        <div className="px-10">
                            <p className="font-formal">
                                This Agreement outlines the terms and conditions under which
                                Moving7 will provide services to{" "}
                                <span className="font-bold font-formal">
                                    "{partnerData?.companyName}"
                                </span>{" "}
                                (the "Client") for obtaining quote requests for various types of
                                moves, including international, domestic, and industrial
                                relocations.
                            </p>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                1. Scope of Services
                            </h2>
                            <p className="font-formal my-2">
                                1.1 Moving7 will provide the Client with quote requests for:
                            </p>
                            <ul className="list-disc list-inside">
                                <li className="font-formal">International moves</li>
                                <li className="font-formal">Domestic moves</li>
                                <li className="font-formal">Industrial moves</li>
                            </ul>
                            <p className="font-formal my-2">
                                1.2 Moving7 will forward each quote request to a maximum of five
                                (5) moving companies.
                            </p>
                            <p className="font-formal my-2">
                                1.3 The Client may cancel or place this contract on hold at any
                                time. Cancellations or holds will be processed within one (1)
                                business day. A hold may not exceed thirty (30) days without
                                impacting the Client's ranking.
                            </p>
                            <p className="font-formal my-2">
                                1.4 The Client agrees to follow up on all leads provided by
                                Moving7 in a timely and appropriate manner.
                            </p>
                            <p className="font-formal my-2">
                                1.5 The Client is strictly prohibited from reselling any leads
                                provided by Moving7.
                            </p>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                2. Claim Policy
                            </h2>
                            <p className="font-formal my-2">
                                2.1 The Client may return a lead to Moving7 within three (3)
                                days if:
                            </p>
                            <ul className="list-disc list-inside">
                                <li className="font-formal">
                                    The lead contains incorrect contact information, including
                                    telephone number and email address.
                                </li>
                                <li className="font-formal">The lead is a duplicate.</li>
                                <li className="font-formal">
                                    The lead is clearly fake (e.g., Name: "Test," Address:
                                    "Test").
                                </li>
                                <li className="font-formal">
                                    The lead is for a domestic move when an international move was
                                    requested.
                                </li>
                                <li className="font-formal">
                                    The move date is scheduled for more than one (1) year in the
                                    future.
                                </li>
                            </ul>
                            <p className="font-formal my-2">
                                2.2 Claims should be submitted via email to claim@moving7.com.
                                Approved refunds or claims will be deducted from the Client's
                                next invoice. Credit notes will not be issued.
                            </p>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                3. Online Account
                            </h2>
                            <p className="font-formal my-2">
                                3.1 The Client account on Moving 7 requires acceptance of this
                                agreement for activation. This account will provide access to:
                            </p>
                            <ul className="list-disc list-inside">
                                <li className="font-formal">
                                    Leads, including detailed information
                                </li>
                                <li className="font-formal">Invoices and specifications</li>
                                <li className="font-formal">Accepted claims and refunds</li>
                                <li className="font-formal">Basic account information</li>
                            </ul>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                4. Pricing
                            </h2>
                            <p className="font-formal my-2">
                                4.1 The Client agrees to the following pricing structure:
                            </p>
                            <ul className="list-disc list-inside">
                                <li className="font-formal">Domestic moves: $7 USD per lead</li>
                                <li className="font-formal">
                                    International moves: $16 USD per lead
                                </li>
                                <li className="font-formal">
                                    Industrial moves: $25 USD per lead
                                </li>
                            </ul>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                5. Payment Method
                            </h2>
                            <p className="font-formal my-2">
                                5.1 The Client may choose from the following payment methods:
                            </p>
                            <ul className="list-disc list-inside">
                                <li className="font-formal">Top-up E-Wallet</li>
                                <li className="font-formal">Bank Transfer</li>
                                <li className="font-formal">Credit Card</li>
                            </ul>
                            <p className="font-formal my-2">
                                5.2 The Client authorizes Moving7 to charge their credit card
                                for any outstanding invoices. The Client is responsible for
                                ensuring sufficient funds are available.
                            </p>
                            <p className="font-formal my-2">
                                5.3 A minimum top-up amount of $100 is required.
                            </p>
                            <p className="font-formal my-2">
                                5.4 In the event a transaction is denied due to insufficient
                                funds, a $15 penalty will be applied to the Client's account.
                            </p>

                            <h2 className="font-formal mt-4 mb-1 text-lg font-bold">
                                6. Agreement
                            </h2>

                            <p className="font-formal my-2">
                                By signing below, the undersigned confirms their agreement to
                                the terms and conditions outlined in this Agreement and
                                Moving7's general terms and conditions, which are available at
                                http://moving7.com/terms-and-conditions.html.
                            </p>
                            <p className="font-formal my-2">
                                Upon receipt of this signed Agreement, Moving7 will confirm the
                                activation of the Client's account via email.
                            </p>

                            <div className="w-full my-20 flex-wrap flex justify-between items-end">
                                <div>
                                    <div className="flex gap-2">
                                        <p className="font-formal">Company Name:</p>
                                        <p className="font-formal">{partnerData?.companyName}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className="font-formal">Authorize Person Name:</p>
                                        <p className="font-stylish text-[3rem]">{personName}</p>
                                        <EditOutlined
                                            className="w-6 h-6"
                                            onClick={() => setIsModalOpen(true)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="gap-2">
                                        <div className="relative">
                                            <ReactSignatureCanvas
                                                ref={sigCanvas}
                                                penColor="black"
                                                canvasProps={{
                                                    width: 200,
                                                    height: 180,
                                                    className: "sigCanvas border",
                                                }}
                                            />
                                            <ClearOutlined
                                                className="absolute top-0 right-[-2rem] w-6 h-6"
                                                onClick={() => clearSignature()}
                                            />
                                        </div>
                                        <p className="font-formal cursor-pointer">Signature</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-formal">Date:</p>
                                        <p className="font-formal">{new Date().toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            <AntdModal
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                            >
                                <input
                                    value={personName}
                                    onChange={(e) => setPersonName(e.target.value)}
                                    title={"Authorized Person Name"}
                                    className="border sm:w-80 w-full py-2 px-2 focus:outline-none text-lg font-formal"
                                />
                            </AntdModal>

                            <AntdModal
                                handleSubmit={() => {
                                    submit(false);
                                }}
                                isModalOpen={isRejectionModalOpen}
                                title={"Specify the reason for rejecting contract."}
                                setIsModalOpen={setIsRejectionModalOpen}
                            >
                                <textarea
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                    className="border w-full h-40 font-formal text-base px-2 py-2"
                                />
                            </AntdModal>
                        </div>
                    </div>

                    <div className="w-[70rem] max-lg:w-[90%] max-lg:w-[90%] justify-between my-10 flex">
                        <button
                            onClick={() => setIsRejectionModalOpen(true)}
                            className="bg-red-700 font-formal text-white rounded  px-4 py-2"
                        >
                            Reject
                        </button>
                        <button
                            onClick={() => submit(true)}
                            className="bg-green-700 font-formal text-white rounded  px-4 py-2"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            ) : !partnerData?.contract?.status ? (
                <div>You have not received any contract yet from Moving 7.</div>
            ) : partnerData?.contract?.status === "Rejected" ? (
                <div>
                    You have rejected the contract offered to you, you will get the
                    response in on to two business days.
                </div>
            ) : (
                <div> Page not found</div>
            )}
        </>
    );
};

export default Contract;
