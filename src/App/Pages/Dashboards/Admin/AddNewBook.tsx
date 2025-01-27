import CustomButton from "@/App/Components/Customs/CustomButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, FieldValues, SubmitHandler, useForm, FieldError } from "react-hook-form";

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
      const {
            register,
            handleSubmit,
            control,
            formState: { errors }
      } = useForm();

      const handelAddNewBook: SubmitHandler<FieldValues> = (data) => {
            console.log(data);
      };

      return (
            <div className="flex justify-center items-center mt-10">
                  <form onSubmit={handleSubmit(handelAddNewBook)} className="border  w-full md:w-3/4 lg:w-1/2 space-y-6 p-8 rounded-md">
                        <h1 className="text-center font-bold text-4xl text-brandTextPrimary mb-8">Add New Book</h1>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="title">Book Name</Label>
                                    <Input
                                          {...register("title", { required: "Title is required" })}
                                          type="text"
                                          id="title"
                                          placeholder="Ex: Pride and Prejudice"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm">{(errors.title as FieldError).message}</p>}
                              </div>

                              <div className="grid w-full max-w-sm items-center gap-1.5">
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
                              <div className="grid w-full max-w-sm items-center gap-1.5">
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

                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="quantity">Book Quantity</Label>
                                    <Input
                                          {...register("quantity", { required: "Quantity is required", })}
                                          type="number"
                                          id="quantity"
                                          placeholder="Ex: 10"
                                    />
                                    {errors.quantity && <p className="text-red-500 text-sm">{(errors.quantity as FieldError).message}</p>}
                              </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="price">Book Price</Label>
                                    <Input
                                          {...register("price", { required: "Price is required" })}
                                          type="number"
                                          id="price"
                                          placeholder="Ex: 30$"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{(errors.price as FieldError).message}</p>}
                              </div>

                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="exchangeble">Exchangeable Type</Label>
                                    <Controller
                                          name="exchangable"
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
                                                                  <SelectItem value="Exchangable">Exchangable</SelectItem>
                                                                  <SelectItem value="Non Exchangable">Non Exchangable</SelectItem>
                                                            </SelectGroup>
                                                      </SelectContent>
                                                </Select>
                                          )}
                                    />
                                    {errors.exchangable && <p className="text-red-500 text-sm">{(errors.exchangable as FieldError).message}</p>}
                              </div>
                        </div>

                        <div className="grid w-full gap-1.5">
                              <Label htmlFor="description">Description</Label>
                              <Textarea
                                    {...register("description", { required: "Description is required" })}
                                    placeholder="Type a short overview for this book"
                                    id="description"
                              />
                              {errors.description && <p className="text-red-500 text-sm">{(errors.description as FieldError).message}</p>}
                        </div>

                        <div className="flex justify-end">
                              <CustomButton btnType="submit" btnText="Add Now" />
                        </div>
                  </form>
            </div>
      );
};

export default AddNewBook;
