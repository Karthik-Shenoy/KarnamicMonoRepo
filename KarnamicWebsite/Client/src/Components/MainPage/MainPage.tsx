import { Strings } from "../../assets/Strings";
import CanvasComponent3D from "./CanvasComponent3D";
import { BreakPoint } from "./utils";

function MainPage() {
    const screenWidth = window.innerWidth;
  return (
    <div
      className={`z-[1] flex flex-col w-screen h-[90vh] min-[${BreakPoint}px]:flex-row mt-3`}
    >
      {/* 2D component */}
      <div
        className={`w-screen h-[65%] flex justify-center items-center min-[${BreakPoint}px]:w-[60%] min-[${BreakPoint}px]:h-full`}
      >
        <div
          className={`w-[90%] h-[88%] min-[800px]:h-[70%] shadow-xl bg-gray-50 border-[1px] border-gray-500 rounded-xl flex flex-col justify-center`}
        >
          <h1 className={`text-xl w-[75%] my-2 w-[60%] pl-4 py-2 bg-black text-white font-black font-[Consolas] rounded-sm shadow-md min-[800px]:text-3xl min-[${BreakPoint}px]:w-[60%]`}>
            {Strings.HomePageTitle}
          </h1>

          {/* Description Div */}
          <div className="px-12 text-justify">
            <p className={`my-3 text-sm font-bold min-[800px]:text-md`}>
              {Strings.HomePageDescription}
            </p>

            <ul className="text-[11px] font-medium">
              <li className="my-8 flex flex-row items-center">
                <i className="fas fa-check text-green-500 p-2 mr-4 scale-[1.25] rounded-full shadow-lg border-[1px] border-gray-500"></i>
                {screenWidth < 800 ? Strings.HomePageShortDescItem1 : Strings.HomePageDecriptionItem1}
              </li>
              <li className="flex flex-row items-center">
                <i className="fas fa-code text-blue-500 scale-[1.25] p-2 mr-4 rounded-full shadow-lg border-[1px] border-gray-500"></i>
                {screenWidth < 800 ? Strings.HomePageShortDescItem2 :Strings.HomePageDecriptionItem2}
              </li>
            </ul>

          </div>
        </div>
      </div>
      {/* 3D render div */}
      <div
        id="canvas-container"
        className={`"w-screen h-[35%] flex min-[${BreakPoint}px]:w-[40%] min-[${BreakPoint}px]:h-full`}
      >
        <CanvasComponent3D />
      </div>
    </div>
  );
}

export default MainPage;
