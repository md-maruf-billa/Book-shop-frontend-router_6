import Loading from "@/App/Components/Customs/Loading"
import { useGetAllOrdersQuery } from "@/App/Redux/features/user/user.api"
import { selectUser } from "@/App/Redux/features/user/user.slice"
import { useAppSelector } from "@/App/Redux/hook"
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"

export default function ViewAllOrder() {
      const user = useAppSelector(selectUser)
      const { data, isLoading } = useGetAllOrdersQuery(user?.email);
      if (isLoading) return <Loading />
      console.log(data?.data)

      const orderData = data?.data.map((item: Record<string, any>) => ({
            orderId: item?.orderInfo?.orderId,
            orderStatus: item?.orderStatus,
            paymentMethod: item?.orderInfo?.method,
            totalAmount: item?.totalPrice,
            quantity: item?.quantity,
            productId: item?.product
      }))

      return (
            <>
                  <h1 className="my-4 text-center text-3xl text-brandTextPrimary font-semibold">Your Order's</h1>
                  <Table>
                        <TableCaption>A list of your recent orders.</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Order Id</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead>Product Id</TableHead>
                                    <TableHead>Order Quantity</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {orderData.map((invoice: any) => (
                                    <TableRow key={invoice.invoice}>
                                          <TableCell className="font-medium">{invoice.orderId}</TableCell>
                                          <TableCell>{invoice.orderStatus}</TableCell>
                                          <TableCell>{invoice.paymentMethod}</TableCell>
                                          <TableCell>{invoice.productId}</TableCell>
                                          <TableCell>{invoice.quantity}</TableCell>
                                          <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                        <TableFooter>
                              <TableRow>
                                    <TableCell colSpan={5}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                              </TableRow>
                        </TableFooter>
                  </Table>
            </>
      )
}
