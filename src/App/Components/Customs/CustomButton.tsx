import { IoIosArrowRoundForward } from "react-icons/io";
type Tbutton = {
      btnText: string;
}

const CustomButton = ({ btnText }: Tbutton) => {
      return (
            <button className="border border-brandTextPrimary flex justify-center items-center gap-1 px-8 py-3">
                  {btnText}
                  <IoIosArrowRoundForward />
            </button>
      );
};

export default CustomButton;