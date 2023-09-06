export const BreakPoint = window.innerHeight > window.innerWidth ? 1000 : 800;
export const TextBreakPoint = 0;


export function GetBoxSize() {
    let BoxSize = 0;
    if (window.innerWidth > BreakPoint) {
      const FIXED_CONTAINER_WIDTH = 560;
      const canvasContainerWidth =
        document.getElementById("canvas-container")?.clientWidth;
      console.log(canvasContainerWidth);
      if (canvasContainerWidth)
        BoxSize = (canvasContainerWidth * 1.6) / FIXED_CONTAINER_WIDTH;
    } else {
      const canvasContainerWidth =
        document.getElementById("canvas-container")?.clientWidth;
      if (canvasContainerWidth) {
        const ScalePercentage = canvasContainerWidth/BreakPoint
        BoxSize = canvasContainerWidth / (490 * ScalePercentage);
      }
    }
    console.log(BoxSize)
    return [BoxSize, BoxSize, BoxSize];
  }