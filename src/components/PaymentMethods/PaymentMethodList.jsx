import { FaTrash } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import {
  detachPaymentMethod,
  fetchPaymentMethods,
  getStripeCustomer,
  setDefaultPM,
} from "../../apiFunctions/partner";

const PaymentMethodList = () => {
  const fetchStripeCustomer = useQuery({
    queryKey: ["fetchStripeCustomer"],
    queryFn: getStripeCustomer,
    onSettled: (d, e) => {
      console.log(d, e);
    },
  });

  const fetchPaymentMethdosRes = useQuery({
    queryKey: ["fetchPaymentMethods"],
    queryFn: fetchPaymentMethods,
    onSettled: (d, e) => {
      console.log(d, e);
    },
  });

  const setDefaultPaymentMethod = useMutation({
    mutationKey: "setDefaultPaymentMethod",
    mutationFn: setDefaultPM,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Operation completed!");
      window.location.reload();
    },
    onError: (e) => console.log(e),
    onSettled: (d, e) => console.log(d, e),
  });

  const deletePaymentMutation = useMutation({
    mutationKey: "DeletePaymentMethod",
    mutationFn: detachPaymentMethod,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Successfully Deleted!");
      window.location.reload();
    },
    onError: (e) => toast.error("Error " + e?.message),
    onSettled: (d, e) => console.log(d, e),
  });

  const paymenMethods = fetchPaymentMethdosRes?.data?.data?.data ?? [];

  const handleDelete = (pmId) => {
    deletePaymentMutation.mutate(pmId);
    window.location.reload();
  };

  const defaultPaymentMethod =
    fetchStripeCustomer?.data?.data?.invoice_settings?.default_payment_method ??
    "";
  console.log(defaultPaymentMethod, " default ");

  const handleDefaultpaymentMethod = (pmId) => {
    if (defaultPaymentMethod === pmId) {
      return;
    }
    setDefaultPaymentMethod.mutate(pmId);
  };

  return (
    <div className="my-6">
      <h1 className="text-xl ">Payment Methods</h1>
      <div className="my-6 ">
        {paymenMethods?.map((pm) => {
          return (
            <div className="my-2 rounded-lg justify-between items-center border py-2 px-4 flex">
              <div className="flex items-center gap-4">
                {pm?.card?.brand === "visa" ? (
                  <RiVisaLine className="" size={50} />
                ) : pm?.card?.brand === "mastercard" ? (
                  <RiMastercardFill size={50} />
                ) : null}
                <div className="mx-4 ">
                  <p className="text-sm">Ending in {pm?.card?.last4}</p>
                  <p className="text-sm text-gray-500">
                    Expiry date {pm?.card?.exp_month}/{pm?.card?.exp_year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  onClick={() => handleDefaultpaymentMethod(pm?.id)}
                  className="border cursor-pointer rounded-full bg-primary text-xs py-1 px-3  border-primary"
                >
                  {defaultPaymentMethod === pm?.id
                    ? "default"
                    : "set as default"}
                </div>
                <FaTrash
                  onClick={() => handleDelete(pm?.id)}
                  className="cursor-pointer text-gray-400"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethodList;
