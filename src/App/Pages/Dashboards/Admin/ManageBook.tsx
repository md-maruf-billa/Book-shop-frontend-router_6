import Loading from "@/App/Components/Customs/Loading";
import { useDeleteBookMutation, useGetAllBooksQuery, useUpdateBookMutation } from "@/App/Redux/features/user/user.api";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { bookCategories } from "@/constant/conastant";
import { TBook } from "@/Types";
import { Avatar } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";


const ManageBook = () => {
      const [bookId, setBookId] = useState<string>("")
      const { data, isLoading } = useGetAllBooksQuery(undefined);
      const [deleteBook] = useDeleteBookMutation()
      const [updateBook] = useUpdateBookMutation()
      const { register, control, handleSubmit } = useForm();

      const handleUpdateBook: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Book updating....")
            try {
                  const formData = new FormData();

                  formData.append("image", data?.bookImage[0])
                  const payload = {
                        ...data,
                        price: Number(data?.price),
                        quantity: Number(data?.quantity),
                        bookImage: " ",
                        bookId
                  }
                  formData.append("data", JSON.stringify(payload))

                  const res = await updateBook(formData)
                  if (res?.data?.success) {
                        toast.success("Book updated successfully!", { id: toastId })
                  } else {
                        toast.error("Error updating the book!", { id: toastId })
                  }
            } catch (err) {
                  toast.error("Error updating the book!", { id: toastId })
                  console.log(err)
            }

      }
      const handleBookDelete = async (id: string) => {
            const toastId = toast.loading("Book deleting....")
            const res = await deleteBook(id)
            if (res?.data?.success) {
                  toast.success("Book deleted successfully!", { id: toastId })
            } else {
                  toast.error("Something went wrong !!", { id: toastId })
            }
      }


      if (isLoading) return <Loading />;
      return (
            <div>
                  <h1 className="my-8 text-3xl text-brandTextPrimary font-semibold">Your Book's</h1>
                  <Table>
                        <TableCaption>A list of your recent books.</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Cover</TableHead>
                                    <TableHead>Book Name</TableHead>
                                    <TableHead>Writer</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Stock</TableHead>
                                    <TableHead>Book Price</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {data?.data?.data?.map((book: TBook) => (
                                    <TableRow key={book._id}>
                                          <TableCell className="font-medium">
                                                <Avatar>
                                                      <AvatarImage src={book?.bookImage} alt={book?.title} />
                                                      <AvatarFallback>{book?.title?.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                          </TableCell>
                                          <TableCell>{book?.title}</TableCell>
                                          <TableCell>{book?.author}</TableCell>
                                          <TableCell>{book?.quantity}</TableCell>
                                          <TableCell >{book?.inStock ? <Badge variant="default">In Stock</Badge> : <Badge variant="destructive">Out of Stock</Badge>}</TableCell>
                                          <TableCell>{book?.price}</TableCell>
                                          <TableCell>{book?.category}</TableCell>
                                          <TableCell className="text-right w-[350px] flex items-center justify-end gap-1">
                                                <Popover>
                                                      <PopoverTrigger asChild>
                                                            <button onClick={() => setBookId(book?._id)} className="bg-brandTextPrimary text-white px-4 py-2 rounded-full hover:bg-brandTextPrimary/60">
                                                                  Edit
                                                            </button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="w-[350px]">
                                                            <form className="space-y-5" onSubmit={handleSubmit(handleUpdateBook)}>
                                                                  <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                                                                        <div className="grid w-full  items-center gap-1.5">
                                                                              <Label htmlFor="title">Book Name</Label>
                                                                              <Input
                                                                                    {...register("title")}
                                                                                    type="text"
                                                                                    id="title"
                                                                                    placeholder="Ex: Pride and Prejudice"
                                                                              />
                                                                        </div>

                                                                        <div className="grid w-full  items-center gap-1.5">
                                                                              <Label htmlFor="author">Writer Name</Label>
                                                                              <Input
                                                                                    {...register("author")}
                                                                                    type="text"
                                                                                    id="author"
                                                                                    placeholder="Ex: Jane Austen"
                                                                              />
                                                                        </div>
                                                                  </div>

                                                                  <div className="flex flex-col md:flex-row items-center gap-4">
                                                                        <div className="grid w-full  items-center gap-1.5">
                                                                              <Label htmlFor="category">Book Category</Label>
                                                                              <Controller
                                                                                    name="category"
                                                                                    control={control}
                                                                                    defaultValue=""
                                                                                    render={({ field }) => (
                                                                                          <Select onValueChange={field.onChange} value={field.value}>
                                                                                                <SelectTrigger className="w-full">
                                                                                                      <SelectValue placeholder="Select a category" />
                                                                                                </SelectTrigger>
                                                                                                <SelectContent>
                                                                                                      <SelectGroup>
                                                                                                            <SelectLabel>Select Category</SelectLabel>
                                                                                                            {bookCategories.map((book) => (
                                                                                                                  <SelectItem key={book} value={book}>
                                                                                                                        {book}
                                                                                                                  </SelectItem>
                                                                                                            ))}
                                                                                                      </SelectGroup>
                                                                                                </SelectContent>
                                                                                          </Select>
                                                                                    )}
                                                                              />
                                                                        </div>
                                                                        <div className="flex items-center w-full gap-2">

                                                                              <div className="grid w-full  items-center gap-1.5">
                                                                                    <Label htmlFor="quantity">Book Quantity</Label>
                                                                                    <Input
                                                                                          {...register("quantity")}
                                                                                          type="number"
                                                                                          id="quantity"
                                                                                          placeholder="Ex: 10"
                                                                                    />
                                                                              </div>
                                                                              {/* <div className="grid w-full  items-center gap-1.5">
                                                                              <Label htmlFor="quantity">Publish Year</Label>
                                                                              <Controller
                                                                                    name="publishYear"
                                                                                    rules={{ required: "Publish is required" }}
                                                                                    control={control}
                                                                                    render={({ field }) =>
                                                                                          <Popover>
                                                                                                <PopoverTrigger asChild>
                                                                                                      <Button
                                                                                                            variant="outline"
                                                                                                            className={cn(
                                                                                                                  "justify-start text-left font-normal",
                                                                                                                  !date && "text-muted-foreground"
                                                                                                            )}
                                                                                                      >
                                                                                                            <CalendarIcon />
                                                                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                                                                      </Button>
                                                                                                </PopoverTrigger>
                                                                                                <PopoverContent className="w-auto p-0">
                                                                                                      <Calendar
                                                                                                            mode="single"
                                                                                                            selected={date}
                                                                                                            onSelect={(selectedDate) => {
                                                                                                                  // Only update the date if selectedDate is defined
                                                                                                                  if (selectedDate) {
                                                                                                                        setDate(selectedDate); // Set the selected date
                                                                                                                        field.onChange(selectedDate); // Pass the date to react-hook-form
                                                                                                                  }
                                                                                                            }}
                                                                                                            initialFocus
                                                                                                      />
                                                                                                </PopoverContent>
                                                                                          </Popover>
                                                                                    }
                                                                              />
                                                                              {errors.publishYear && <p className="text-red-500 text-sm">{(errors.publishYear as FieldError).message}</p>}
                                                                        </div> */}

                                                                        </div>
                                                                  </div>

                                                                  <div className="flex flex-col md:flex-row items-center gap-4">
                                                                        <div className="grid w-full items-center gap-1.5">
                                                                              <Label htmlFor="price">Book Price</Label>
                                                                              <Input
                                                                                    {...register("price")}
                                                                                    type="number"
                                                                                    id="price"
                                                                                    placeholder="Ex: 30$"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                                  <div className="flex gap-5 items-end">
                                                                        <div className="grid ap-1.5">
                                                                              <Label htmlFor="description">Description</Label>
                                                                              <Textarea
                                                                                    {...register("description")}
                                                                                    placeholder="Type a short overview for this book"
                                                                                    id="description"
                                                                              />

                                                                        </div>

                                                                        <div className="w-1/3">
                                                                              <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                                                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                                                    </svg>
                                                                                    <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200 text-sm">photo</h2>

                                                                                    <input {...register("bookImage")} id="dropzone-file" type="file" className="hidden" />
                                                                              </label>
                                                                        </div>
                                                                  </div>

                                                                  <button type="submit" className="bg-brandSelect hover:bg-brandSelect/60 text-white w-full py-2 rounded-full ">
                                                                        Update Now
                                                                  </button>
                                                            </form>
                                                      </PopoverContent>
                                                </Popover>
                                                <button onClick={() => handleBookDelete(book?._id)} className="bg-brandSelect text-white px-4 py-2 rounded-full hover:bg-brandSelect/60">
                                                      Delete
                                                </button>
                                          </TableCell>
                                    </TableRow>
                              ))}

                        </TableBody>
                  </Table>
            </div >
      );
};

export default ManageBook;