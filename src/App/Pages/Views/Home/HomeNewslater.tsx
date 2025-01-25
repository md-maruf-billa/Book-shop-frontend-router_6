import CustomButton from "@/App/Components/Customs/CustomButton";
import bar from "@/assets/bar.png"
import featuredbook from "@/assets/images/featuredbook.png"
const HomeNewslater = () => {
      return (

                  <div className="flex items-center justify-center gap-28 backround-liner mt-20">
                        <div className=""><img src={featuredbook} alt="" /></div>

                        <div className="space-y-8">
                              <h1 className="text-brandTextTertiary font-bold text-5xl">Featured book</h1>
                              <div className="space-y-2">
                                    <img className="w-28 h-[0.5px]" src={bar} alt="" />
                                    <p className="text-[#888888]">BY TIMBUR HOOD</p>
                              </div>

                              <div className="space-y-4">
                                    <h1 className="text-brandTextTertiary font-bold text-3xl">Birds gonna be happy</h1>

                                    <p className="text-[#7A7A7A] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                                    <h2 className="text-brandSelect font-bold text-2xl">$ 45.00</h2>
                              </div>

                              <CustomButton btnText="VIEW MORE" />
                        </div>
                  </div>
      );
};

export default HomeNewslater;