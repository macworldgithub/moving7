import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { claimQuote, getClaimQuote } from "../../apiFunctions/partner";
import AntdModal from "../../components/AntdModal";

const Claim = ({ status, quotationData }) => {
  const [claimReason, setClaimReason] = useState("");
  const [showClaimModal, setShowClaimModal] = useState(false);
  const partnerQuotesRes = useQuery({
    queryKey: ["fetchClaimQuote", quotationData?._id],
    queryFn: getClaimQuote,
  });
  const claimMutation = useMutation({
    mutationKey: "claimMutation",
    mutationFn: claimQuote,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Feedback submitted successfully!");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    onSettled: (d, e) => console.log(d, e),
  });

  const claim = partnerQuotesRes?.data?.data ?? {};
  console.log(status, "Statussssss");

  return (
    <>
      <AntdModal
        title={"Submit your claim"}
        handleSubmit={() => {
          console.log(quotationData._id, " halaaaaaa");

          if (claim?.claim) {
            setShowClaimModal(false);
            return;
          }

          claimMutation.mutate({
            reason: claimReason,
            quoteId: quotationData._id,
          });
          setShowClaimModal(false);
        }}
        isModalOpen={showClaimModal}
        setIsModalOpen={setShowClaimModal}
      >
        {claim?.claim ? (
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <p>Status</p>
              <p>{claim?.claim?.status}</p>
            </div>
            <div className="flex justify-between">
              <p>Claimed At</p>
              <p>{new Date(claim?.claim?.claimedAt).toLocaleString()}</p>
            </div>
            <p className="text-gray-400">
              You won't be charged for this lead if status is Submitted or
              Accepted.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-base mb-1">Kindly specify the reason.</p>
            <textarea
              value={claimReason}
              onChange={(e) => setClaimReason(e.target.value)}
              className="w-full border h-40 py-2 px-2"
            />
          </div>
        )}
      </AntdModal>

      {
        claim?.claim && status !== "paid" && (
          <button
            onClick={() => setShowClaimModal(true)}
            className="bg-red-500 text-white rounded py-1 px-4"
          >
            Show Status
          </button>
        )
        //                : !claim.claim && claim.status !== "paid" ? (
        //                        <button onClick={() => setShowClaimModal(true)} className='bg-red-500 text-white rounded py-1 px-4'>
        //                            Claim
        //                        </button>
        //                    ) : null
      }

      {console.log(claim.status !== "paid", "CLAIN", claim.status)}
      {claim.claim === undefined && status !== "paid" && (
        <button
          onClick={() => setShowClaimModal(true)}
          className="bg-red-500 text-white rounded py-1 px-4"
        >
          Claim
        </button>
      )}
    </>
  );
};

export default Claim;
