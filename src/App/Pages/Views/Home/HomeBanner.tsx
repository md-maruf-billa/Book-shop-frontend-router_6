import CustomButton from "@/App/Components/Customs/CustomButton";
import banner1 from "@/assets/images/banner1.png"


const HomeBanner = () => {
      return (

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 backround-liner pt-10 md:py-10 ">
                  <div className="w-full md:w-2/3 lg:w-1/2 space-y-6 pl-10">
                        <h1 className="text-brandTextPrimary font-bold text-3xl lg:text-5xl italic">'' A Home for Book Lovers</h1>
                        <p className="tracking-[0.88px] text-sm lg:text-base">
                              Welcome to Mahid Book's, your one-stop destination for book lovers! Whether you're searching for the latest bestsellers, timeless classics, or hidden literary gems, we've got something for every reader. Browse our carefully curated collection, discover new authors, and immerse yourself in the magic of storytelling. With seamless browsing, secure checkout, and fast delivery, your next great read is just a click away
                        </p>
                        <CustomButton btnText="READ MORE" />
                  </div>

                  <div className="w-full md:w-2/5 lg:w-1/2">
                        <img className="w-full" src={banner1} alt="" />
                  </div>
            </div>


      );
};

export default HomeBanner;