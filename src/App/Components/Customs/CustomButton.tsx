import { IoIosArrowRoundForward } from "react-icons/io";
type Tbutton = {
      btnText: string;
}

const CustomButton = ({ btnText }: Tbutton) => {
      return (
            <button className="border border-brandTextTertiary flex justify-center items-center gap-1 px-8 py-3 rounded-md text-[#173F5F] text-sm tracking-[3px] hover:bg-brandTextTertiary hover:text-white transition delay-75">
                  {btnText}
                  <IoIosArrowRoundForward />
            </button>
      );
};

export default CustomButton;