import { useQuery } from "react-query";
import { getOnePartnerInvoice } from "../../apiFunctions/partner";

const InvoiceItem = ({ inv, setShowModal, setData }) => {
  const partnerInvoiceRes = useQuery({
    queryKey: [
      "fetchOnePartnerInvoice",
      {
        invoiceId: inv?.invoiceStripeId,
      },
    ],
    queryFn: getOnePartnerInvoice,
  });

  const partnerInvoiceData = partnerInvoiceRes?.data?.data ?? {};

  console.log(partnerInvoiceData, " invoice");

  return (
    <tr
      className="cursor-pointer"
      onClick={() => {
        setShowModal(true);
        setData(inv);
      }}
    >
      <td className="text-center mx-1 py-2 text-para">{new Date(inv?.from)?.toDateString()}</td>
      <td className="text-center mx-1 text-para">{new Date(inv?.to)?.toDateString()}</td>
      <td className="text-center mx-1 text-para">{new Date(inv?.paidAt)?.toLocaleString()}</td>
      <td className="text-center mx-1 text-para">
        {parseFloat(partnerInvoiceData.amount_paid) / 100}{" "}
        {partnerInvoiceData.currency}
      </td>
      <td className="text-center mx-1 text-para">{partnerInvoiceData.status}</td>
      <td className="text-center mx-1 text-blue-500 text-para">
        <a href={partnerInvoiceData.hosted_invoice_url} target="_blank">
          View
        </a>
      </td>
    </tr>
  );
};

export default InvoiceItem;
