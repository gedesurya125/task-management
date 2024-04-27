"use client";
import React from "react";
import { fakeListItem } from "@/data/fakeListItem";
import { ListCard } from "./ListCard";
import { motion } from "framer-motion";
import { useMouseDrag } from "@/app/hooks/useMouseDrag";

export function ListContainer() {
  useMouseDrag("draggable-container");

  return (
    <motion.div
      id="draggable-container"
      className="flex border-black border-solid border border-1 justify-start items-start overflow-x-auto overflow-y-hidden w-full py-2 cursor-grab"
    >
      {fakeListItem.map((listItem, index) => {
        return (
          <ListCard
            key={index}
            title={listItem.title}
            description={listItem.description}
          />
        );
      })}
    </motion.div>
    // </div>
  );
}
