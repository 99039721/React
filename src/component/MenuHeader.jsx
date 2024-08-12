import React from "react";
import { ChipNew, ChipVegan } from "./Chip";

export const MenuHeader = () => {
  return (
    <div className="MenuHeader">
      <ChipVegan />
      <ChipNew />
    </div>
  );
};
