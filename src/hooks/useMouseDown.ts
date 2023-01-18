import { useState } from "react";

export type SetMouseDownStatus = () => void;
export type SetmouseUpStatus = () => void;

export const useMouseDown = (): [
  boolean,
  SetMouseDownStatus,
  SetmouseUpStatus
] => {
  const [mouseDown, setMouseDown] = useState(false);
  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);
  return [mouseDown, onMouseDown, onMouseUp];
}