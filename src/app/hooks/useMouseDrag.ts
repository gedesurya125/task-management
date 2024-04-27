import React from "react";

type ScrollableELementPosition = {
  top: number;
  left: number;
  x: number;
  y: number;
};

export const useMouseDrag = (elementId: string) => {
  const mouseDownHandler = (e: any) => {
    let pos: ScrollableELementPosition = { top: 0, left: 0, x: 0, y: 0 };

    const ele = document.getElementById(elementId);
    if (ele) {
      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
      ele.style.cursor = "grabbing";
      ele.style.userSelect = "none";

      const mouseMoveHandler = function (e: MouseEvent) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
      };

      const mouseUpHandler = function () {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);

        ele.style.cursor = "grab";
        ele.style.removeProperty("user-select");
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", mouseDownHandler);

    () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  });
};
