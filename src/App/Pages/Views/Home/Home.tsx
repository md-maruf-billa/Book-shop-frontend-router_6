import HomeBanner from "./HomeBanner";
import HomeFeatured from "./HomeFeatured";
import HomeNewBooks from "./HomeNewBooks";
import HomeNewslater from "./HomeNewslater";
import HomeTopCategories from "./HomeTopCategories";


const Home = () => {
      return (
            <div>
                  <HomeBanner />
                  <HomeTopCategories />
                  <HomeNewBooks/>
                  <HomeFeatured/>
                  <HomeNewslater/>
            </div>
      );
};

export default Home;