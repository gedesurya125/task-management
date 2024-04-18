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
import { deleteWorkspace } from "@/prismaClient/queries/deleteWorkspace";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const CardMenu = ({ workspaceId }: { workspaceId: string }) => {
  const router = useRouter();

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
        <CardMenuItem
          Icon={Trash}
          text="Delete"
          handleClick={async () => {
            console.log("hi i a clicked");
            await deleteWorkspace({ id: workspaceId });
            router.refresh();
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CardMenuItem = ({
  text,
  Icon,
  handleClick,
}: {
  text: string;
  Icon: React.ElementType;
  handleClick?: () => void;
}) => {
  return (
    <DropdownMenuItem asChild>
      <Button variant="ghost" className="p-0" onClick={handleClick}>
        <Icon size={14} /> <span className="ml-2">{text}</span>
      </Button>
    </DropdownMenuItem>
  );
};
