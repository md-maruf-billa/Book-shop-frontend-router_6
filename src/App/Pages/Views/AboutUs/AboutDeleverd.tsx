import CustomButton from "@/App/Components/Customs/CustomButton";
import abg from "@/assets/images/about1.png"
import bar from "@/assets/bar.png"
import accoimg from "@/assets/images/accodion.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router";
const AboutDeleverd = () => {
      return (
            <div className="mt-10">
                  <div className="flex flex-col md:flex-row gap-5 justify-between items-center  bg-brandSecondary pb-10 lg:py-0">
                        <div className="md:w-[40%] lg:w-1/2"><img src={abg} className="w-full" alt="" /></div>
                        <div className="md:w-[60%] lg:w-1/2 px-4 md:px-10">
                              <h1 className="md:text-3xl lg:text-4xl text-brandTextPrimary font-bold italic">Curated Books, Endless Stories – Delivered to You</h1>
                              <p className="text-brandTextSecondary py-5 text-justify">
                                    Discover the joy of reading with our carefully curated collection of books, delivered straight to your doorstep. Whether you're into timeless classics, thrilling mysteries, or inspiring non-fiction, we ensure a seamless shopping experience so you can simply relax and immerse yourself in your next great read!
                              </p>
                              <Link to="/books" >
                                    <CustomButton btnText="Buy Book Now" />
                              </Link>
                        </div>
                  </div>

                  {/*  */}

                  <div className="mt-28">
                        <div className="flex flex-col justify-center items-center ">
                              <p className="flex items-center gap-1 text-brandSelect text-sm tracking-[4px]"><img src={bar} alt="" />QUESTIONS</p>
                              <h1 className="text-3xl font-semibold text-brandTextPrimary">Discover More Details</h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-5">
                              <div className="md:w-[40%] lg:w-1/2">
                                    <img src={accoimg} alt="" />
                              </div>
                              <Accordion type="single" collapsible className="md:w-[60%] lg:w-1/2">
                                    <AccordionItem value="item-1">
                                          <AccordionTrigger>Why you best?</AccordionTrigger>
                                          <AccordionContent>
                                                We stand out as the best because of our carefully curated book selection, affordable pricing, and exceptional customer service. With a passion for literature, we ensure that every book lover finds their perfect read. Enjoy fast delivery, exclusive editions, and a seamless shopping experience that makes us your go-to bookstore!
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                          <AccordionTrigger>What types of books do you offer?</AccordionTrigger>
                                          <AccordionContent>
                                                We offer a wide range of books, including fiction, non-fiction, bestsellers, classics, academic books, self-help, and more. No matter your interest, we have something for every reader!
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                          <AccordionTrigger> Do you offer discounts or promotions?</AccordionTrigger>
                                          <AccordionContent>
                                                Yes! We frequently run special promotions, discounts, and seasonal sales. Keep an eye on our website and subscribe to our newsletter to stay updated on exclusive deals.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                          <AccordionTrigger> How long does delivery take?</AccordionTrigger>
                                          <AccordionContent>
                                                Delivery times vary based on your location, but we strive to deliver your books as quickly as possible. Typically, orders arrive within 3-7 business days. Express shipping options are also available.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                          <AccordionTrigger> Can I return or exchange a book?</AccordionTrigger>
                                          <AccordionContent>
                                                Absolutely! If you receive a damaged or incorrect book, we offer hassle-free returns and exchanges. Simply contact our support team within 7 days of receiving your order.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6">
                                          <AccordionTrigger> How can I track my order?</AccordionTrigger>
                                          <AccordionContent>
                                                Once your order is shipped, you’ll receive a tracking number via email or SMS. You can use this to track your package and stay updated on its delivery status.
                                          </AccordionContent>
                                    </AccordionItem>
                              </Accordion>
                        </div>
                  </div>
            </div>
      );
};

export default AboutDeleverd;