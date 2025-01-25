import HomeBanner from "./HomeBanner";
import HomeNewBooks from "./HomeNewBooks";
import HomeTopCategories from "./HomeTopCategories";


const Home = () => {
      return (
            <div>
                  <HomeBanner />
                  <HomeTopCategories />
                  <HomeNewBooks/>
            </div>
      );
};

export default Home;