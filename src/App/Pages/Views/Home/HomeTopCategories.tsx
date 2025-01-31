import bar from "@/assets/bar.png"
import cate1 from "@/assets/images/category-1.png"
import cate2 from "@/assets/images/category-2.png"
import cate3 from "@/assets/images/category-3.png"

const data = [
      {
            id: 1,
            title: "Schoole Books",
            desc: "School Books offers essential textbooks, workbooks, and guides for all grades. Learn, grow, and succeed with high-quality educational resources for every student’s needs.",
            img: cate1
      },
      {
            id: 2,
            title: "Management Books",
            desc: "Management Books provides essential guides, strategies, and insights for leadership, business, and success. Enhance your skills and excel in your career with top resources.",
            img: cate2
      },
      {
            id: 3,
            title: "Novels Books",
            desc: "Novels Books offers a wide selection of captivating stories, from timeless classics to modern bestsellers. Escape into exciting worlds and discover your next favorite read.",
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


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 mt-14">
                        {
                              data.map(card =>
                                    <div key={card.id} className="border p-4 rounded-lg">
                                          <div><img className="w-full" src={card.img} alt="" /></div>
                                          <div >
                                                <h2 className="text-brandTextPrimary font-semibold lg:text-2xl text-center mt-3">{card.title}</h2>
                                                <p className="text-brandTextSecondary text-justify lg:text-center text-sm lg:text-base  lg:leading-[32px] mt-3">
                                                      {card.desc}
                                                </p>
                                          </div>
                                    </div>
                              )
                        }

                  </div>

                  {/* <div className="mt-14 flex justify-center items-center">
                        <CustomButton btnText="VIEW MORE" />
                  </div> */}
            </div>
      );
};

export default HomeTopCategories;