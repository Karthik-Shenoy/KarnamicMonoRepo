import { useEffect, useState } from "react";
import { Strings } from "../../../assets/Strings";
import { BreakPoint } from "../utils";

type Props = {};

function HeroSection({}: Props) {
  let [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <>
      {/* 2D component */}
      <div
        className={`w-screen h-[65%] flex justify-center items-center min-[${BreakPoint}px]:w-[60%] min-[${BreakPoint}px]:h-full`}
      >
        <div
          className={`w-[90%] h-[full] py-6 shadow-xl bg-gray-50 border-[1px] border-gray-500 rounded-xl flex flex-col justify-center`}
        >
          <h1
            className={`text-xl w-[75%] my-2 w-[60%] pl-4 py-2 bg-black text-white font-black font-[Consolas] rounded-sm shadow-md min-[800px]:text-3xl min-[${BreakPoint}px]:w-[60%]`}
          >
            {Strings.HomePageTitle}
          </h1>

          {/* Description Div */}
          <div className="px-12 text-justify">
            <p className={`my-3 text-sm font-bold text-lg`}>
              {Strings.HomePageDescription}
            </p>

            <ul className="text-md font-medium">
              <li className="mt-8 flex flex-row items-center">
                <i className="fas fa-check text-green-500 p-2 mr-4 scale-[1.25] rounded-full shadow-lg border-[1px] border-gray-500"></i>
                {screenWidth < 800
                  ? Strings.HomePageShortDescItem1
                  : Strings.HomePageDecriptionItem1}
              </li>
              <li className="mt-8 flex flex-row items-center">
                <i className="fas fa-code text-blue-500 scale-[1.25] p-2 mr-4 rounded-full shadow-lg border-[1px] border-gray-500"></i>
                {screenWidth < 800
                  ? Strings.HomePageShortDescItem2
                  : Strings.HomePageDecriptionItem2}
              </li>
              <li className="mt-8 flex flex-row items-center">
                <i className="fas fa-star text-yellow-500 scale-[1.25] p-2 mr-4 rounded-full shadow-lg border-[1px] border-gray-500"></i>
                {screenWidth < 800
                  ? Strings.HomePageShortDescItem2
                  : Strings.HomePageDecriptionItem2}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
