import book1 from "@/assets/images/book1.png"
import bar from "@/assets/bar.png"
import CustomButton from "@/App/Components/Customs/CustomButton";
import { useState } from "react";

const HomeNewBooks = () => {
      const [isHover, setIsHover] = useState(false)
      return (

            <div className="mt-16">
                  <div>
                        <p className="flex items-center gap-2 text-brandSelect text-sm"><img src={bar} alt="" /> SOME QUALITY ITEMS</p>
                        <h1 className="text-4xl font-semibold text-brandTextPrimary mt-4">New Release Books</h1>
                  </div>

                  <div className="grid grid-cols-4 gap-8 mt-14">

                        <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="border py-4 rounded-lg">
                              <div className="flex justify-center items-center flex-col relative">
                                    <img className="shadow-2xl rounded-sm" src={book1} alt="" />
                                    <button
                                          className={`bg-brandSelect text-white w-full text-center py-4 tracking-[4px] text-sm absolute bottom-0 cursor-pointer transition-opacity duration-500 ${isHover ? "opacity-100 visible" : "opacity-0 invisible"
                                                }`}
                                    >
                                          ADD TO CART
                                    </button>
                              </div>
                              <div className="text-center space-y-2 mt-4">
                                    <h2 className="text-brandTextPrimary font-semibold text-xl">Simple way of piece life</h2>
                                    <small className="text-[#888888]">Armor Ramsey</small>
                                    <h3 className="text-brandSelect font-bold">$ 40.00</h3>
                              </div>
                        </div>
                        <div onMouseOver={() => setIsHover(true)} className="border py-4 rounded-lg">
                              <div className="flex justify-center items-center flex-col relative">
                                    <img className="shadow-2xl rounded-sm" src={book1} alt="" />
                                    <p
                                          style={{ display: isHover ? "block" : "none" }}
                                          className="bg-brandSelect text-white w-full text-center py-4 tracking-[4px] text-sm absolute bottom-0 cursor-pointer">ADD TO CART</p>
                              </div>
                              <div className="text-center space-y-2 mt-4">
                                    <h2 className="text-brandTextPrimary font-semibold text-xl">Simple way of piece life</h2>
                                    <small className="text-[#888888]">Armor Ramsey</small>
                                    <h3 className="text-brandSelect font-bold">$ 40.00</h3>
                              </div>
                        </div>
                        <div onMouseOver={() => setIsHover(true)} className="border py-4 rounded-lg">
                              <div className="flex justify-center items-center flex-col relative">
                                    <img className="shadow-2xl rounded-sm" src={book1} alt="" />
                                    <p
                                          style={{ display: isHover ? "block" : "none" }}
                                          className="bg-brandSelect text-white w-full text-center py-4 tracking-[4px] text-sm absolute bottom-0 cursor-pointer">ADD TO CART</p>
                              </div>
                              <div className="text-center space-y-2 mt-4">
                                    <h2 className="text-brandTextPrimary font-semibold text-xl">Simple way of piece life</h2>
                                    <small className="text-[#888888]">Armor Ramsey</small>
                                    <h3 className="text-brandSelect font-bold">$ 40.00</h3>
                              </div>
                        </div>
                        <div onMouseOver={() => setIsHover(true)} className="border py-4 rounded-lg">
                              <div className="flex justify-center items-center flex-col relative">
                                    <img className="shadow-2xl rounded-sm" src={book1} alt="" />
                                    <p
                                          style={{ display: isHover ? "block" : "none" }}
                                          className="bg-brandSelect text-white w-full text-center py-4 tracking-[4px] text-sm absolute bottom-0 cursor-pointer">ADD TO CART</p>
                              </div>
                              <div className="text-center space-y-2 mt-4">
                                    <h2 className="text-brandTextPrimary font-semibold text-xl">Simple way of piece life</h2>
                                    <small className="text-[#888888]">Armor Ramsey</small>
                                    <h3 className="text-brandSelect font-bold">$ 40.00</h3>
                              </div>
                        </div>


                  </div>

                  <div className="flex justify-center items-center mt-14">
                        <CustomButton btnText="MORE BOOK'S" />
                  </div>

            </div>
      );
};

export default HomeNewBooks;