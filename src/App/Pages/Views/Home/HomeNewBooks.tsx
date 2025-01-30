import bar from "@/assets/bar.png"
import CustomButton from "@/App/Components/Customs/CustomButton";
import { useState } from "react";
import { useGetAllBooksQuery } from "@/App/Redux/features/user/user.api";
import { TBook } from "@/Types";
import { Link } from "react-router";
import Loading from "@/App/Components/Customs/Loading";

const HomeNewBooks = () => {
      const [isHover, setIsHover] = useState("");
      const { data, isLoading } = useGetAllBooksQuery(undefined)
      if (isLoading) return <Loading />;
      return (

            <div className="mt-16">
                  <div>
                        <p className="flex items-center gap-2 text-brandSelect text-sm"><img src={bar} alt="" /> SOME QUALITY ITEMS</p>
                        <h1 className="text-4xl font-semibold text-brandTextPrimary mt-4">New Release Books</h1>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-14">

                        {data?.data?.data?.map((book: TBook) => <div key={book._id} onMouseOver={() => setIsHover(book._id)} onMouseLeave={() => setIsHover("")} className="border py-4 rounded-lg">
                              <div className="flex justify-center items-center flex-col relative">
                                    <img className="shadow-2xl rounded-sm" src={book.bookImage} alt="" />
                                    <button
                                          className={`bg-brandSelect text-white w-full text-center py-4 tracking-[4px] text-sm absolute bottom-0 cursor-pointer transition-opacity duration-500 ${isHover == book._id ? "opacity-100 visible" : "opacity-0 invisible"
                                                }`}
                                    >
                                          ADD TO CART
                                    </button>
                              </div>
                              <div className="text-center space-y-2 mt-4">
                                    <h2 className="text-brandTextPrimary font-semibold text-xl hover:text-brandSelect"> <Link to={`/book-details/${book._id}`} >{book.title}</Link></h2>
                                    <small className="text-[#888888]">{book.author}</small>
                                    <h3 className="text-brandSelect font-bold">$ {book.price}</h3>
                              </div>
                        </div>)}
                  </div>

                  <div className="flex justify-center items-center mt-14">
                        <Link to="/books"> <CustomButton btnText="MORE BOOK'S" /></Link>
                  </div>

            </div>
      );
};

export default HomeNewBooks;