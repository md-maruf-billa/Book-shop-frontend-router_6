import CustomButton from "@/App/Components/Customs/CustomButton";
import banner1 from "@/assets/images/banner1.png"


const HomeBanner = () => {
      return (

            <div className="flex justify-between items-center gap-10 backround-liner">
                  <div className="w-1/2 space-y-6 pl-10">
                        <h1 className="text-brandTextPrimary font-bold text-6xl">ipsum dolor si</h1>
                        <p className="tracking-[0.88px]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                        </p>
                        <CustomButton btnText="READ MORE" />
                  </div>

                  <div className="w-1/2">
                        <img className="w-full" src={banner1} alt="" />
                  </div>
            </div>


      );
};

export default HomeBanner;