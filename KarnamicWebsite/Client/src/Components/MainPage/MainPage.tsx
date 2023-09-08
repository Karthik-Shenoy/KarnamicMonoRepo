import CanvasComponent3D from "./CanvasComponent3D";
import HeroSection from "./HeroSection/HeroSection";
import { BreakPoint } from "./utils";

function MainPage() {
  return (
    <div
      className={`z-[1] flex flex-col w-screen h-full min-h-[90vh] min-[${BreakPoint}px]:flex-row items-center my-7`}
    >
      {/* 2D Div */}
      <HeroSection/>
      {/* 3D render div */}
      <div
        id="canvas-container"
        className={`w-screen max-[${BreakPoint}px]:h-[30vh] flex min-[${BreakPoint}px]:w-[40%] h-screen`}
      >
        <CanvasComponent3D />
      </div>
    </div>
  );
}

export default MainPage;
