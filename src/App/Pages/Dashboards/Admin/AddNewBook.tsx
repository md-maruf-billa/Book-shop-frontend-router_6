import CustomButton from "@/App/Components/Customs/CustomButton";
import { useCreateNewBookMutation } from "@/App/Redux/features/admin/admin.api";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler, useForm, FieldError } from "react-hook-form";
import { TResponse } from '@/Types';
import { toast } from "sonner";

const bookCategories = [
      'Fiction',
      'NonFiction',
      'Science',
      'SelfDevelopment',
      'Poetry',
      'Religious',
      'Biography',
      'Fantasy',
      'History',
      'Thriller',
      'Mystery'
];

const AddNewBook = () => {
      const [createNewBook] = useCreateNewBookMutation();
      const [date, setDate] = useState<Date>()
      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
            reset
      } = useForm();

      const handelAddNewBook: SubmitHandler<FieldValues> = async (data) => {
            const formData = new FormData();

            // Append the image file (make sure your input name matches)
            formData.append("image", data.bookImage[0]);

            // Create the book payload and append it to the formData
            const bookPayload = {
                  title: data.title,
                  author: data.author,
                  price: Number(data.price),
                  category: data.category,
                  description: data.description,
                  quantity: Number(data.quantity),
                  exchangeable: data.exchangeable,
                  publishYear: data.publishYear.getFullYear(),
                  inStock: data.quantity ? true : false,
            };
            formData.append("data", JSON.stringify(bookPayload));

            // Toast loading state
            const toastId = toast.loading("Book is creating ...");

            try {
                  const res = await createNewBook(formData) as TResponse;
                  if (res?.data?.success) {
                        toast.success("Book created successfully!", { id: toastId });
                        reset(); 
                  } else {
                        toast.error("Something went wrong!", { id: toastId });
                  }
            } catch (error) {
                  toast.error("Error creating the book!", { id: toastId });
            }
      };


      return (
            <div className="flex justify-center items-center mt-10">
                  <form onSubmit={handleSubmit(handelAddNewBook)} className="border  w-full md:w-3/4 lg:w-[60%] space-y-8 p-8 rounded-md">
                        <h1 className="text-center font-bold text-4xl text-brandTextPrimary mb-8">Add New Book</h1>

                        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                              <div className="grid w-full  items-center gap-1.5">
                                    <Label htmlFor="title">Book Name</Label>
                                    <Input
                                          {...register("title", { required: "Title is required" })}
                                          type="text"
                                          id="title"
                                          placeholder="Ex: Pride and Prejudice"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm">{(errors.title as FieldError).message}</p>}
                              </div>

                              <div className="grid w-full  items-center gap-1.5">
                                    <Label htmlFor="author">Writer Name</Label>
                                    <Input
                                          {...register("author", { required: "Author name is required" })}
                                          type="text"
                                          id="author"
                                          placeholder="Ex: Jane Austen"
                                    />
                                    {errors.author && <p className="text-red-500 text-sm">{(errors.author as FieldError).message}</p>}
                              </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="grid w-full  items-center gap-1.5">
                                    <Label htmlFor="category">Book Category</Label>
                                    <Controller
                                          name="category"
                                          control={control}
                                          defaultValue=""
                                          rules={{ required: "Category is required" }}
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
                                    {errors.category && <p className="text-red-500 text-sm">{(errors.category as FieldError).message}</p>}
                              </div>
                              <div className="flex items-center w-full gap-2">

                                    <div className="grid w-full  items-center gap-1.5">
                                          <Label htmlFor="quantity">Book Quantity</Label>
                                          <Input
                                                {...register("quantity", { required: "Quantity is required", })}
                                                type="number"
                                                id="quantity"
                                                placeholder="Ex: 10"
                                          />
                                          {errors.quantity && <p className="text-red-500 text-sm">{(errors.quantity as FieldError).message}</p>}
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
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
                                    </div>

                              </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="price">Book Price</Label>
                                    <Input
                                          {...register("price", { required: "Price is required" })}
                                          type="number"
                                          id="price"
                                          placeholder="Ex: 30$"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{(errors.price as FieldError).message}</p>}
                              </div>

                              <div className=" w-full  items-center gap-1.5">
                                    <Label htmlFor="exchangeble">Exchangeable Type</Label>
                                    <Controller
                                          name="exchangeable"
                                          control={control}
                                          defaultValue=""
                                          rules={{ required: "Exchangeable type is required" }}
                                          render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                      <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select a value" />
                                                      </SelectTrigger>
                                                      <SelectContent>
                                                            <SelectGroup>
                                                                  <SelectLabel>Select Type</SelectLabel>
                                                                  <SelectItem value="Exchangeable">Exchangeable</SelectItem>
                                                                  <SelectItem value="Non Exchangeable">Non Exchangeable</SelectItem>
                                                            </SelectGroup>
                                                      </SelectContent>
                                                </Select>
                                          )}
                                    />
                                    {errors.exchangeable && <p className="text-red-500 text-sm">{(errors.exchangeable as FieldError).message}</p>}
                              </div>
                        </div>
                        <div className="flex gap-5 items-center">
                              <div className="grid w-full gap-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                          {...register("description", { required: "Description is required" })}
                                          placeholder="Type a short overview for this book"
                                          id="description"
                                    />
                                    {errors.description && <p className="text-red-500 text-sm">{(errors.description as FieldError).message}</p>}
                              </div>

                              <div className="w-1/3">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-4 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                          </svg>
                                          <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200 text-sm">Book photo</h2>

                                          <input {...register("bookImage", { required: "Book image is required" })} id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                    {errors.bookImage && <p className="text-red-500 text-sm">{(errors.bookImage as FieldError).message}</p>}
                              </div>
                        </div>


                        <div className="flex justify-end">

                              <div>
                                    <CustomButton btnType="submit" btnText="Add Now" />
                              </div>
                        </div>
                  </form>
            </div>
      );
};

export default AddNewBook;
