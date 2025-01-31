import Loading from "@/App/Components/Customs/Loading";
import { useVerifyOrderQuery } from "@/App/Redux/features/user/user.api";
import { useRef } from "react";
import { Link, useSearchParams } from "react-router";
// import { useReactToPrint } from "react-to-print";
import generatePDF from 'react-to-pdf';

const VerifyOrder = () => {
      // Ref for PDF generation
      const [params] = useSearchParams();
      const invoiceRef = useRef<HTMLDivElement>(null);

      const { data, isLoading } = useVerifyOrderQuery(params.get("order_id"), { refetchOnMountOrArgChange: true });
      if (isLoading) return <Loading />;
      const { method, invoice_no, date_time, email, name, id, address, bank_status, customer_order_id, amount, payable_amount, currency } = data?.data[0];


      return (
            <div className="flex flex-col items-center py-10 ">
                  <div ref={invoiceRef} className=" shadow-md rounded-lg p-6 w-full max-w-2xl">
                        <div className="text-center">
                              <h1 className="text-3xl font-semibold text-brandTextPrimary">Invoice of Mahid Book's</h1>
                              <h3 className="text-lg italic text-gray-600 mt-2 mb-6">
                                    Please store the invoice for future reference.
                              </h3>
                        </div>

                        {/* Invoice Header */}
                        <div className="flex justify-between items-center border-b pb-4">
                              <img src="/logo.png" alt="Company logo" className="w-20" />
                              <div className="text-right text-gray-600">
                                    <p>Invoice #: {invoice_no}</p>
                                    <p>Created: {date_time}</p>
                                    <p>Currency: ৳{currency}</p>
                              </div>
                        </div>

                        {/* Company & Client Info */}
                        <div className="grid grid-cols-2 gap-4 my-6">
                              <div className="text-gray-700">
                                    <p className="font-semibold">Cusotmer Name: {name}</p>
                                    <p>Customar Email: {email}</p>
                              </div>
                              <div className="text-gray-700 text-right">
                                    <p className="font-semibold">Order Id: #{id}</p>
                                    <p>Address: {address}</p>
                              </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-brandPrimary p-3 rounded-md mb-4">
                              <p className="font-semibold">Payment Method</p>
                              <p className="text-gray-700">{method}</p>
                              <p className="text-gray-700">Payment Status : {bank_status}</p>
                        </div>

                        {/* Items List */}
                        <table className="w-full border-collapse">
                              <thead>
                                    <tr className="bg-brandSecondary text-gray-700">
                                          <th className="p-2 text-left">Item</th>
                                          <th className="p-2 text-right">Price</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* {items?.map((item, index) => ( */}
                                    <tr className="border-b">
                                          <td className="p-2 text-gray-700">{customer_order_id}</td>
                                          <td className="p-2 text-right text-gray-700">৳{amount}</td>
                                    </tr>
                                    {/* ))} */}
                              </tbody>
                        </table>

                        {/* Total Amount */}
                        <div className="flex justify-between mt-4 text-lg font-semibold">
                              <span>Total:</span>
                              <span>৳{payable_amount}</span>
                        </div>
                  </div>
                  <div className="flex items-center gap-5">
                        <Link to="/orders"><button className="mb-4 bg-brandTextPrimary text-white text-xs md:text-base px-2 md:px-4 py-2 rounded-lg hover:bg-brandTextPrimary/60 transition mt-8">View Orders</button></Link>
                        <button
                              onClick={() => generatePDF(invoiceRef, { filename: "order Invoice.pdf" })}
                              className="mb-4 bg-brandTextPrimary text-white text-xs md:text-base px-2 md:px-4 py-2 rounded-lg hover:bg-brandTextPrimary/60 transition mt-8"
                        >
                              Download PDF
                        </button>
                        <Link to="/"> <button className="mb-4 bg-brandTextPrimary text-white text-xs md:text-base px-2 md:px-4 py-2 rounded-lg hover:bg-brandTextPrimary/60 transition mt-8">Go Home</button></Link>
                  </div>
            </div>
      );
};

export default VerifyOrder;
