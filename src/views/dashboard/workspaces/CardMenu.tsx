"use client";
import React from "react";
import { Ellipsis, Pen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CardMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded rounded-full relative p-0 w-10 aspect-square flex justify-center items-center outline-none">
        <Ellipsis className="absolute" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DropdownMenuLabel>Card Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <CardMenuItem Icon={Pen} text="Edit" />
        <CardMenuItem Icon={Trash} text="Delete" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CardMenuItem = ({
  text,
  Icon,
}: {
  text: string;
  Icon: React.ElementType;
}) => {
  return (
    <DropdownMenuItem className="cursor-pointer">
      <Icon size={14} /> <span className="ml-2">{text}</span>
    </DropdownMenuItem>
  );
};
