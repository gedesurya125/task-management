import React from "react";
import { ListCard } from "./ListCard";
import { fakeListItem } from "@/data/fakeListItem";

export const Main = () => {
  return (
    <div className="flex border-black border-solid border border-1 overflow-x-auto h-dvh justify-start">
      {fakeListItem.map((listItem, index) => {
        return (
          <ListCard
            key={index}
            title={listItem.title}
            description={listItem.description}
          />
        );
      })}
    </div>
  );
};
