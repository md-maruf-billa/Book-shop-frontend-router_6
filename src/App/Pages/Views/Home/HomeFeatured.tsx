import featuredBanner from "@/assets/images/featuredBanner.png"
import bar from "@/assets/bar.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import offerBanner from "@/assets/images/offerCard.png"
const HomeFeatured = () => {
      return (
            <div className="mt-20">
                  <div className="flex items-center justify-between gap-20 backround-liner">
                        <div className="w-1/2 px-10">
                              <p className="flex items-center gap-2 text-brandSelect text-sm"><img src={bar} alt="" /> EBOOK</p>
                              <h1 className="text-brandTextTertiary font-bold text-3xl my-4">
                                    Access, Read, Practice & Engage
                                    with Digital Content (eBook)
                              </h1>
                              <p className="text-brandTextSecondary text-sm leading-[28px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>

                              <div className="flex items-center w-3/4 mt-8">
                                    <Input placeholder='Search books' className='rounded-l-lg rounded-r-none bg-white' />
                                    <Button className="bg-brandSelect rounded-l-none">Send Request</Button>
                              </div>


                        </div>
                        <div className="w-1/2">
                              <img className="w-full" src={featuredBanner} alt="" />
                        </div>
                  </div>


                  <div className="mt-16 flex items-center justify-between bg-[#FCEBEA]">
                        <div className="w-1/2 px-14 space-y-7">
                              <h1 className="font-bold text-4xl text-brandTextTertiary">All books are 50% off now! Don't miss such a deal!</h1>
                              <p className="text-brandTextSecondary text-sm leading-[28px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                              </p>

                              <div className="flex items-center gap-10">
                                    <div className="flex flex-col justify-center items-center gap-2"><h1 className="text-brandSelect text-xl font-bold">768</h1><p>DAYS</p></div>
                                    <div className="flex flex-col justify-center items-center gap-2"><h1 className="text-brandSelect text-xl font-bold">01</h1><p>HOUR</p></div>
                                    <div className="flex flex-col justify-center items-center gap-2"><h1 className="text-brandSelect text-xl font-bold">30</h1><p>MINT</p></div>
                                    <div className="flex flex-col justify-center items-center gap-2"><h1 className="text-brandSelect text-xl font-bold">54</h1><p>SEC</p></div>
                              </div>
                        </div>
                        <div className="w-1/2">
                              <img src={offerBanner} alt="" />
                        </div>
                  </div>

            </div >
      );
};

export default HomeFeatured;