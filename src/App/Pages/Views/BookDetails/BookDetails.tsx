
import CustomButton from "@/App/Components/Customs/CustomButton";
import { useGetBookByIdQuery, useGetReviewsQuery, useSendReviewMutation } from "@/App/Redux/features/user/user.api";
import { selectUser } from "@/App/Redux/features/user/user.slice";
import { useAppSelector } from "@/App/Redux/hook";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TBookReview, TResponse } from "@/Types";
import { Heart, ShoppingCart } from "lucide-react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useParams } from "react-router";
import { toast } from "sonner";


const BookDetails = () => {
      const { bookId } = useParams();
      const [createReview] = useSendReviewMutation()
      const { data, isLoading } = useGetBookByIdQuery(bookId);
      const { data: reviews } = useGetReviewsQuery(bookId, { skip: isLoading })
      const user = useAppSelector(selectUser);


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

      if (isLoading) return <p>Loading...</p>;
      const { bookImage, title, author, category, description, exchangeable, price, publishYear, quantity } = data?.data;
      return (
            <div>
                  <div className="flex items-center">
                        <div className="w-1/3">
                              <img className="w-full" src={bookImage} alt="" />
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

                              <div className="flex items-center justify-between gap-5">
                                    <button title="Bookmark" className="border p-2 rounded-full hover:bg-brandSelect  hover:text-white transition-colors duration-500"><Heart /></button>

                                    <button className="border w-full px-8 py-2 rounded-full bg-brandSelect hover:bg-brandSelect/20 text-white hover:text-brandSelect  transition-colors duration-500">Buy Now</button>

                                    <button title="Add to Cart" className="border p-2 rounded-full  hover:bg-brandSelect  hover:text-white transition-colors duration-500"><ShoppingCart /></button>

                              </div>
                        </div>
                  </div>
                  <hr />
                  <div className="flex justify-between gap-10">
                        <div className="h-[500px] overflow-y-auto scroll-smooth w-full">
                              <h1>Reviews & Retings</h1>

                              {
                                    reviews?.data.map((review: TBookReview) =>
                                          <div className="flex items-center gap-5 border-b py-2 mb-4">
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
                              <div className="w-full"><CustomButton  btnText="Submit Review" /></div>
                        </form>
                  </div>
            </div>
      );
};

export default BookDetails;
