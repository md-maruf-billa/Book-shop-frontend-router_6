import { useGetAllBooksQuery } from "@/App/Redux/features/user/user.api";
import { TBook } from "@/Types";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const Allbooks = () => {
      const { data, isLoading } = useGetAllBooksQuery(undefined);
      if (isLoading) return <p>Loading...</p>;
      return (
            <>
            <div className="text-center py-8 space-y-2 mb-8">
                  <h1 className="text-brandTextPrimary text-4xl font-semibold">New Release Books</h1>
                  <p className="text-brandTextTertiary">1000+ books are published by different authors everyday. </p>
            </div>

                  <div className="grid grid-cols-4 gap-8">
                        {data?.data.map((book: TBook) => (
                              <div key={book._id} className="border rounded-md py-4">
                                    <div>
                                          <div className="flex items-center justify-center">
                                                <img src={book.bookImage} className="shadow-md" alt="" />
                                          </div>
                                          <div className="text-center space-y-1 mt-4">
                                                <h2 className="text-brandTextPrimary font-semibold text-xl">{book.title}</h2>
                                                <p className="text-[#8F8F8F] text-sm">Writer: {book.author}</p>
                                                <p className="text-brandSelect font-semibold text-xl">$ {book.price}</p>
                                          </div>

                                          {/* button Group */}
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

export default Allbooks;