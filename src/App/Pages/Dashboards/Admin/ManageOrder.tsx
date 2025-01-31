import Loading from "@/App/Components/Customs/Loading";
import { useGetAllOrdersForAdminQuery, useUpdateOrderStatusMutation } from "@/App/Redux/features/user/user.api";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { toast } from "sonner";

const ManageOrder = () => {
      const { data, isLoading } = useGetAllOrdersForAdminQuery(undefined);
      const [updateOrderStatus] = useUpdateOrderStatusMutation()
      if (isLoading) return <Loading />;
      const handleUpdateOrderStatus = async (id: string) => {
            const toastId = toast.loading("Order status updating....")
            const res = await updateOrderStatus(id)
            if (res?.data?.success) {
                  toast.success("Order Status updated successfully!", { id: toastId })
            } else {
                  toast.error("Something went wrong !!", { id: toastId })
            }
      }
      return (
            <div>
                  <h1 className="my-8 text-3xl text-brandTextPrimary font-semibold">Your Order's</h1>
                  <Table>
                        <TableCaption>A list of your recent orders.</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Order Id</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead>Product Id</TableHead>
                                    <TableHead>Order Quantity</TableHead>
                                    <TableHead>Customer Email</TableHead>
                                    <TableHead>Amount </TableHead>
                                    <TableHead className="text-center">Action / Status</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {data?.data?.map((order: any) => (
                                    <TableRow key={order._id}>
                                          <TableCell className="font-medium">{order?.orderInfo?.orderId}</TableCell>
                                          <TableCell>{order.orderStatus}</TableCell>
                                          <TableCell>{order?.orderInfo?.method}</TableCell>
                                          <TableCell>{order?.product}</TableCell>
                                          <TableCell>{order?.quantity}</TableCell>
                                          <TableCell>{order?.email}</TableCell>
                                          <TableCell>{order?.price}</TableCell>
                                          <TableCell className="text-right w-[350px] gap-2 flex justify-end">
                                                <Popover>
                                                      <PopoverTrigger asChild>
                                                            <button className="border hover:bg-brandTextPrimary hover:text-white px-4 py-2 rounded-full">
                                                                  View Details
                                                            </button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="w-[500px]">
                                                            <div className="flex flex-col items-center py-10 ">
                                                                  <div ref={order?.invoiceRef} className=" rounded-lg p-6 w-full max-w-2xl">
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
                                                                                    <p>Invoice #: {order?.orderInfo?.orderId}</p>
                                                                                    <p>Created: {order?.orderInfo?.date_time}</p>
                                                                                    <p>Currency: ৳{order?.currency || "BDT"}</p>
                                                                              </div>
                                                                        </div>

                                                                        {/* Company & Client Info */}
                                                                        <div className="grid grid-cols-2 gap-4 my-6">
                                                                              <div className="text-gray-700">
                                                                                    <p className="font-semibold">Cusotmer Name: {order?.name}</p>
                                                                                    <p>Customar Email: {order?.email}</p>
                                                                              </div>
                                                                              <div className="text-gray-700 text-right">
                                                                                    <p className="font-semibold">Order Id: #{order?.id}</p>
                                                                                    <p>Address: {order?.address}</p>
                                                                              </div>
                                                                        </div>

                                                                        {/* Payment Method */}
                                                                        <div className="bg-brandPrimary p-3 rounded-md mb-4">
                                                                              <p className="font-semibold">Payment Method</p>
                                                                              <p className="text-gray-700">{order?.orderInfo?.method}</p>
                                                                              <p className="text-gray-700">Payment Status : {order?.orderInfo?.sp_message}</p>
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
                                                                                          <td className="p-2 text-gray-700">{order?.product}</td>
                                                                                          <td className="p-2 text-right text-gray-700">৳{order?.price}</td>
                                                                                    </tr>
                                                                                    {/* ))} */}
                                                                              </tbody>
                                                                        </table>

                                                                        {/* Total Amount */}
                                                                        <div className="flex justify-between mt-4 text-lg font-semibold">
                                                                              <span>Total: ({order?.quantity})</span>
                                                                              <span>৳{order?.totalPrice}</span>
                                                                        </div>
                                                                  </div>

                                                            </div>
                                                      </PopoverContent>
                                                </Popover>
                                                <Button onClick={() => handleUpdateOrderStatus(order?._id)} disabled={order?.orderStatus == "Cancelled" || !order?.orderStatus || order?.orderStatus == "Complete"} className="rounded-full  bg-brandTextPrimary"   >Complete Now</Button>

                                          </TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </div >
      );
};

export default ManageOrder;