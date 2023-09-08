export const BreakPoint =
  window.innerWidth / window.innerHeight > 1.77 ? 400 : 1000;
export const TextBreakPoint = 0;

export function GetBoxSize() {
  let BoxSize = 0;
  const isRowFlex = window.innerWidth > BreakPoint;
  const canvasContainer = document.getElementById("canvas-container");
  if (!canvasContainer) return [0,0,0];
  const canvasContainerWidth = canvasContainer.clientWidth;
  const canvasContainerHeight = canvasContainer.clientHeight;
  console.log(BreakPoint);
  if (isRowFlex) {
    BoxSize = (canvasContainerWidth * 1.4) / ((canvasContainerHeight ?? 200) / 1.4);
  } else {
    BoxSize = canvasContainerWidth / canvasContainerHeight;
  }
  console.log(BoxSize);
  return [BoxSize, BoxSize, BoxSize];
}
