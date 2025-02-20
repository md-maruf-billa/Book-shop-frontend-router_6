import notData from "@/assets/noData.gif"

const NoData = () => {
      return (
            <div className="flex justify-center items-center">
                  <img className="md:w-1/3" src={notData} alt="" />
            </div>
      );
};

export default NoData;