import CustomButton from "@/App/Components/Customs/CustomButton"
import bar from "@/assets/bar.png"
import cate1 from "@/assets/images/category-1.png"
import cate2 from "@/assets/images/category-2.png"
import cate3 from "@/assets/images/category-3.png"

const data = [
      {
            title: "Schoole Books",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat",
            img: cate1
      },
      {
            title: "Management Books",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat",
            img: cate2
      },
      {
            title: "Novels Books",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat",
            img: cate3
      },
]

const HomeTopCategories = () => {
      return (
            <div className="mt-16">

                  <div >
                        <p className="flex items-center gap-2 text-brandSelect text-sm"><img src={bar} alt="" /> CATEGORIES</p>
                        <h2 className="text-4xl font-semibold text-brandTextPrimary mt-4">Explore our Top Categories</h2>
                  </div>


                  <div className="grid grid-cols-3 gap-12 mt-14">
                        {
                              data.map(card =>
                                    <div className="border p-4 rounded-lg">
                                          <div><img className="w-full" src={card.img} alt="" /></div>
                                          <div >
                                                <h2 className="text-brandTextPrimary font-semibold text-2xl text-center mt-3">{card.title}</h2>
                                                <p className="text-brandTextSecondary text-center leading-[32px] mt-3">
                                                      {card.desc}
                                                </p>
                                          </div>
                                    </div>
                              )
                        }

                  </div>

                  <div className="mt-14 flex justify-center items-center">
                        <CustomButton btnText="VIEW MORE" />
                  </div>
            </div>
      );
};

export default HomeTopCategories;