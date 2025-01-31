
import CustomButton from "@/App/Components/Customs/CustomButton";
import { useCreateOrderMutation, useGetBookByIdQuery, useGetReviewsQuery, useSendReviewMutation } from "@/App/Redux/features/user/user.api";
import { selectUser } from "@/App/Redux/features/user/user.slice";
import { useAppSelector } from "@/App/Redux/hook";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TBookReview, TResponse } from "@/Types";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Loading from "@/App/Components/Customs/Loading";


const BookDetails = () => {
      const [selectedQuantity, setSelectedQuantity] = useState(1)
      const { bookId } = useParams();
      const [createReview] = useSendReviewMutation()
      const { data, isLoading } = useGetBookByIdQuery(bookId);
      const { data: reviews } = useGetReviewsQuery(bookId, { skip: isLoading })
      const user = useAppSelector(selectUser);

      // local state
      const [note, setNote] = useState<string>("")
      const [address, setAddress] = useState<string>("")

      const [createOrder] = useCreateOrderMutation()
      const { register, handleSubmit, control } = useForm();

      const handelSubmitReview: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Review Submitting......");
            const reviewPayload = {
                  bookId,
                  reviewerPhoto: user?.profileImage,
                  reviewerName: user?.name,
                  reviewerEmail: user?.email,
                  empression: data.empression,
                  feedBack: data.feedBack,
                  rating: Number(data.rating)
            }
            const res = await createReview(reviewPayload) as TResponse
            if (res.data?.success) {
                  console.log(res)
                  toast.success("Review successfully submitted ........!!", { id: toastId })
            } else {
                  toast.error("Something went wrong!! Please provide valid information", { id: toastId })
            }
      }

      // handle order

      if (isLoading) return <Loading />;
      const { bookImage, title, author, category, description, exchangeable, price, publishYear, quantity, inStock, _id } = data?.data;

      const handleOrderSubmit = async () => {
            const toastId = toast.loading("Order Creating......")
            const orderPayload = {
                  email: user?.email,
                  name: user?.name,
                  product: _id,
                  quantity: selectedQuantity,
                  price: price,
                  address: address || user?.address,
                  orderNote: note
            };
            if (!user) return toast.error("Please Login First!!", { id: toastId })
            if (user && user?.role == "admin") return toast.error("You are admin, you can't plase order.", { id: toastId })
            try {
                  const res = await createOrder(orderPayload) as TResponse
                  console.log(res)
                  if (res?.data?.success) {
                        toast.success("Order created successfully!", { id: toastId });
                        window.location.href = res?.data?.data
                  } else {
                        toast.error(JSON.stringify(res?.error?.data?.message), { id: toastId });
                  }
            } catch (error) {
                  toast.error("An error occurred. Please try again.", { id: toastId });
            }
      };
      console.log(user)


      return (
            <div>
                  <div className="flex items-center">
                        <div className="w-1/3 relative">
                              <img className="w-full " src={bookImage} alt="" />
                              {!inStock && <span className=" absolute top-10 right-0 p-2 bg-brandSelect text-white rounded-sm">Out of Stock</span>}

                        </div>
                        <div className="w-1/2 space-y-6">
                              <h1 className="text-5xl font-semibold text-brandTextPrimary">{title}</h1>
                              <h3 className="italic text-brandTextSecondary">By - <span className="text-[#888]">{author}</span></h3>
                              <h3><span className="italic text-brandTextSecondary">Category:</span> <span className="text-[#888]"> {category}</span></h3>
                              <p className="text-[#888] text-justify">
                                    <span className="italic text-brandTextSecondary">  Summary,</span> <br />
                                    {description}
                              </p>
                              <div className="flex items-center justify-between">
                                    <button className="border px-6 py-2 rounded-full bg-brandSecondary"><span className="italic text-brandTextSecondary">Type:</span> <span className="text-brandSelect font-semibold">{exchangeable}</span></button>

                                    <button className="border px-6 py-2 rounded-full bg-brandSecondary"><span className="italic text-brandTextSecondary">Price:</span> <span className="text-brandSelect font-semibold">${price}</span></button>

                                    <button className="border px-6 py-2 rounded-full"><span className="italic text-brandTextSecondary">Publish Year:</span> <span className="text-brandSelect font-semibold">{publishYear}</span></button>

                                    <button className="border px-6 py-2 rounded-full"><span className="italic text-brandTextSecondary">In Stock:</span> <span className="text-brandSelect font-semibold">{quantity}</span></button>
                              </div>

                              <div className="flex items-center justify-end gap-5">
                                    <button title="Bookmark" className="border p-2 rounded-full hover:bg-brandTextPrimary  hover:text-white transition-colors duration-500"><Heart /></button>

                                    {quantity !== 0 ?
                                          <Popover >
                                                <PopoverTrigger asChild>
                                                      {/* <Button variant="outline">Open popover</Button> */}
                                                      <button className="border cursor-pointer  px-8 py-2 rounded-full bg-brandTextPrimary hover:bg-brandTextPrimary/60 text-white hover:text-brandSecondary  transition-colors duration-500">Buy Now</button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[400px]  ">

                                                      <div className="grid gap-4">
                                                            <div className="space-y-2 text-center">
                                                                  <h4 className="font-semibold text-xl text-brandTextPrimary">Order Details</h4>
                                                                  <p className="text-sm text-muted-foreground">
                                                                        Please double check the order details
                                                                  </p>
                                                            </div>
                                                            <div className="grid gap-2">
                                                                  <div className="space-y-2">
                                                                        <Label htmlFor="bookName">Book Name</Label>
                                                                        <Input

                                                                              readOnly
                                                                              id="bookName"
                                                                              value={title}
                                                                              className="col-span-2 h-8"
                                                                        />
                                                                  </div>
                                                                  <div className="flex items-center justify-between">
                                                                        <div className="space-y-2">
                                                                              <Label htmlFor="price">Book Price</Label>
                                                                              <Input
                                                                                    readOnly
                                                                                    id="price"
                                                                                    value={price * selectedQuantity}
                                                                                    className="col-span-2 h-8"
                                                                              />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                              <Label htmlFor="bookName">Quantity</Label>
                                                                              <div className="flex justify-between items-center gap-5 border rounded-full">
                                                                                    <button disabled={selectedQuantity == 1} onClick={() => setSelectedQuantity(selectedQuantity - 1)} title="Add to Cart" className="border p-1 rounded-full  hover:bg-brandSelect  hover:text-white transition-colors duration-500"><Minus /></button>
                                                                                    <h3>{selectedQuantity}</h3>
                                                                                    <button disabled={selectedQuantity == quantity} onClick={() => setSelectedQuantity(selectedQuantity + 1)} title="Add to Cart" className="border p-1 rounded-full  hover:bg-brandSelect  hover:text-white transition-colors duration-500"><Plus /></button>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <h3 className="text-center italic font-semibold mt-4 text-brandTextPrimary">Billing Info</h3>
                                                                  <hr />
                                                                  <div className="space-y-2">
                                                                        <Label htmlFor="name">Your Name</Label>
                                                                        <Input
                                                                              id="name"
                                                                              readOnly
                                                                              value={user?.name}
                                                                              className="col-span-2 h-8"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <Label htmlFor="email">Email</Label>
                                                                        <Input
                                                                              id="email"
                                                                              value={user?.email}
                                                                              readOnly
                                                                              className="col-span-2 h-8"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <Label htmlFor="address">Address</Label>
                                                                        <Input
                                                                              onChange={(e) => setAddress(e.target.value)}
                                                                              type="text"
                                                                              defaultValue={user?.address}
                                                                              className="col-span-2 h-8"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <Label htmlFor="area">Additional info</Label>
                                                                        <Textarea onChange={(e) => setNote(e.target.value)} placeholder="Type anything..." />
                                                                  </div>

                                                            </div>
                                                      </div>
                                                      <div className="flex justify-center items-center mt-8 z-30">
                                                            <span onClick={handleOrderSubmit}>
                                                                  <CustomButton btnType="submit" btnText="Order Now" />
                                                            </span>
                                                      </div>

                                                </PopoverContent>
                                          </Popover>
                                          :
                                          <p className="border  px-8 py-2 rounded-full bg-brandSelect  text-white hover:text-brandSecondary  transition-colors duration-500">Out of Stock</p>}

                                    <button title="Add to Cart" className="border p-2 rounded-full  hover:bg-brandTextPrimary  hover:text-white transition-colors duration-500"><ShoppingCart /></button>

                              </div>
                        </div>
                  </div>
                  <hr />
                  <div className="flex justify-between gap-10">
                        <div className="h-[500px] overflow-y-auto scroll-smooth w-full">
                              <h1>Reviews & Retings</h1>

                              {
                                    reviews?.data.map((review: TBookReview, idx: number) =>
                                          <div key={idx} className="flex items-center gap-5 border-b py-2 mb-4">
                                                <div>
                                                      <Avatar>
                                                            <AvatarImage src={review.reviewerPhoto} alt="@shadcn" />
                                                            <AvatarFallback>{review.reviewerName[0].toLocaleUpperCase()}</AvatarFallback>
                                                      </Avatar>
                                                </div>
                                                <div className="space-y-1">
                                                      <h3>{review.rating}</h3>
                                                      <h3 className="font-semibold text-brandTextPrimary italic">{review.empression}</h3>
                                                      <h3 className="text-sm text-gray-500"><span className="text-brandTextSecondary italic">Reviewer-</span> {review.reviewerName}</h3>
                                                      <p className="text-gray-500 italic">"{review.feedBack} "</p>
                                                </div>

                                          </div>)
                              }

                        </div>
                        <form onSubmit={handleSubmit(handelSubmitReview)} className="w-1/3 border p-4 space-y-3">
                              <h1 className="tracking-[4px] text-brandTextTertiary font-semibold text-xl text-center">GIVE YOUR REVIEW</h1>

                              <Input {...register("rating")} placeholder="Give a rating ⭐" />
                              <Controller
                                    name="empression"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Category is required" }}
                                    render={({ field }) => (
                                          <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full">
                                                      <SelectValue placeholder="Select a Excelence" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                      <SelectGroup>
                                                            <SelectItem value="Highly Recomended">Highly Recomended</SelectItem>
                                                            <SelectItem value="Very Good">Very Good</SelectItem>
                                                            <SelectItem value="Good">Good</SelectItem>
                                                            <SelectItem value="Bad">Bad</SelectItem>
                                                            <SelectItem value="Very Bad">Very Bad</SelectItem>
                                                            <SelectItem value="Not Recommended">Not Recommended</SelectItem>
                                                      </SelectGroup>
                                                </SelectContent>
                                          </Select>
                                    )}
                              />
                              {/* {errors.category && <p className="text-red-500 text-sm">{(errors.category as FieldError).message}</p>} */}

                              <Textarea {...register("feedBack")} placeholder="Your Custom Feed Back" />
                              <div className="w-full"><CustomButton btnText="Submit Review" /></div>
                        </form>
                  </div>
            </div>
      );
};

export default BookDetails;
