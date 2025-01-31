import banner from "@/assets/images/aboutBanner.png"
const AboutBanner = () => {
      return (
            <div className="flex flex-col md:flex-row justify-between items-center py-10">
                  <div className="md:w-[60%] lg:w-1/2 space-y-3">
                        <h1 className="md:text-3xl lg:text-4xl text-brandTextPrimary font-bold italic"><span className="text-brandSelect">" Mahid Book's</span> 100% Trusted & Authentic Bookstore for Avid Readers</h1>
                        <p className="text-brandTextSecondary text-justify">
                              Discover a 100% trusted and authentic bookstore where book lovers can explore a vast collection of carefully curated titles. From timeless classics to the latest bestsellers, we bring you high-quality books across all genres. Whether you're a passionate reader, a student, or a collector, our bookstore is your go-to destination for genuine, affordable, and inspiring reads. Shop with confidence and fuel your love for literature!
                        </p>
                  </div>
                  <div className="md:w-2/5 lg:w-1/2"><img className="w-full" src={banner} alt="" /></div>
            </div>
      );
};

export default AboutBanner;