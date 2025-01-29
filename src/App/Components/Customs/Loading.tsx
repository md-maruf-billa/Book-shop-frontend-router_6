import logo from "@/assets/logo.png"
const Loading = () => {
      return (
            <div className="min-h-[60vh] flex justify-center items-center ">
                  <div className="border p-4 rounded-full">
                        <img src={logo} />
                  </div>
            </div>
      );
};

export default Loading;