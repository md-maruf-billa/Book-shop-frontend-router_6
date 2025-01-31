import { useEffect, useState } from "react";
import { useGetAllBooksQuery } from "@/App/Redux/features/user/user.api";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bookCategories } from "@/constant/conastant";
import { TBook } from "@/Types";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/logo.png"

const AllBooks = () => {
      // Local state for filters
      const [priceRange, setPriceRange] = useState<string | undefined>();
      const [categoryFilter, setCategoryFilter] = useState<string | undefined>();
      const [stockFilter, setStockFilter] = useState<string | undefined>();
      const [authorFilter, setAuthorFilter] = useState<string | undefined>();
      const [searchTerm, setSearchTerm] = useState<string>(""); // Stores user input
      const [queryParams, setQueryParams] = useState<{ name: string; value: any }[]>([]);

      // Update queryParams whenever filters change
      useEffect(() => {
            const newParams: { name: string; value: any }[] = [];

            if ((categoryFilter ?? "").length > 2) {
                  newParams.push({ name: "category", value: categoryFilter });
            }
            if ((authorFilter ?? "").length > 2) {
                  newParams.push({ name: "author", value: authorFilter });
            }
            if (priceRange && priceRange !== "all") {
                  newParams.push({ name: "price", value: priceRange });
            }
            if (stockFilter === "In Stock") {
                  newParams.push({ name: "inStock", value: true });
            }
            if (stockFilter === "Out Stock") {
                  newParams.push({ name: "inStock", value: false });
            }

            setQueryParams(newParams);
      }, [categoryFilter, authorFilter, priceRange, stockFilter]); // Only updates when filters change

      // Handle search button click
      const handleSearch = () => {
            if (searchTerm.length > 2) {
                  setQueryParams((prev) => [...prev.filter((p) => p.name !== "searchTerm"), { name: "searchTerm", value: searchTerm }]);
            }
      };

      // Fetch books with updated queryParams
      const { data, isLoading } = useGetAllBooksQuery(queryParams);
      if (isLoading) return <div className="min-h-screen flex justify-center items-center ">
            <div className="border p-4 rounded-full">
                  <img src={logo} />
            </div>
      </div>;

      // Extract authors
      const authors = data?.data?.data.map((book: TBook) => ({ author: book.author, id: book._id }));

      return (
            <>
                  <div className="text-center py-8 space-y-2 mb-8">
                        <h1 className="text-brandTextPrimary text-4xl font-semibold">New Release Books</h1>
                        <p className="text-brandTextTertiary">1000+ books are published by different authors every day.</p>
                  </div>

                  {/* Filter and search section */}
                  <div className="flex my-8 flex-wrap md:flex-nowrap justify-between gap-5 md:gap-0">
                        <div className="flex flex-wrap items-center gap-5">
                              <Select onValueChange={setPriceRange}>
                                    <SelectTrigger className="w-[160px] md:w-[180px]">
                                          <SelectValue placeholder="Filter with Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Price Range</SelectLabel>
                                                <SelectItem value="all">All</SelectItem>
                                                <SelectItem value="20">$ 00 - $ 20</SelectItem>
                                                <SelectItem value="40">$ 20 - $ 40</SelectItem>
                                                <SelectItem value="60">$ 40 - $ 60</SelectItem>
                                                <SelectItem value="100">$ 60 - $ 100</SelectItem>
                                                <SelectItem value="500">$ 100 - $ 500</SelectItem>
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>

                              <Select onValueChange={setCategoryFilter}>
                                    <SelectTrigger className="w-[160px] md:w-[180px]">
                                          <SelectValue placeholder="Filter with Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Category</SelectLabel>
                                                <SelectItem value=" ">All</SelectItem>
                                                {bookCategories.map((book) => (
                                                      <SelectItem key={book} value={book}>
                                                            {book}
                                                      </SelectItem>
                                                ))}
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>

                              <Select onValueChange={setStockFilter}>
                                    <SelectTrigger className="w-[160px] md:w-[180px]">
                                          <SelectValue placeholder="Filter with Stock" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Availability</SelectLabel>
                                                <SelectItem value="In Stock">In Stock</SelectItem>
                                                <SelectItem value="Out Stock">Out Stock</SelectItem>
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>

                              <Select onValueChange={setAuthorFilter}>
                                    <SelectTrigger className="w-[160px] md:w-[180px]">
                                          <SelectValue placeholder="Filter with Author" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Author</SelectLabel>
                                                <SelectItem value=" ">All Authors</SelectItem>
                                                {authors?.map((book: { id: string, author: string }) => (
                                                      <SelectItem key={book.id} value={book.author}>
                                                            {book.author}
                                                      </SelectItem>
                                                ))}
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>
                        </div>

                        <div className="relative w-full md:w-2/3 lg:w-1/3 h-fit">
                              <Input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search books"
                                    className="rounded-full"
                              />
                              <button
                                    onClick={handleSearch}
                                    className="absolute flex items-center gap-2 z-10 bg-brandTextPrimary right-0 top-1/2 -translate-y-1/2 h-10 p-2 border rounded-full hover:bg-brandSelect text-white transition-color duration-500 cursor-pointer"
                              >
                                    <Search />
                                    Search
                              </button>
                        </div>
                  </div>

                  {/* Books Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {data?.data?.data.map((book: TBook) => (
                              <div key={book._id} className="border rounded-md py-4">
                                    <div>
                                          <div className="relative flex items-center justify-center">
                                                <img src={book.bookImage} className="shadow-md" alt={book.title} />
                                                {!book.inStock && <span className="absolute top-0 left-4 p-2 bg-brandSelect text-white rounded-sm">Out of Stock</span>}
                                          </div>
                                          <div className="text-center space-y-1 mt-4">
                                                <h2 className="text-brandTextPrimary font-semibold text-xl">{book.title}</h2>
                                                <p className="text-[#8F8F8F] text-sm">Writer: {book.author}</p>
                                                <p className="text-brandSelect font-semibold text-xl">$ {book.price}</p>
                                          </div>

                                          {/* Button Group */}
                                          <div className="flex items-center justify-between px-4 py-2 mt-2">
                                                <button title="Bookmark" className="border p-2 rounded-full hover:bg-brandSelect hover:text-white transition-colors duration-500"><Heart /></button>
                                                <Link to={`/book-details/${book._id}`}>
                                                      <button className="border px-8 py-2 rounded-full hover:bg-brandSelect hover:text-white transition-colors duration-500">Details</button>
                                                </Link>
                                                <button title="Add to Cart" className="border p-2 rounded-full hover:bg-brandSelect hover:text-white transition-colors duration-500"><ShoppingCart /></button>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default AllBooks;
