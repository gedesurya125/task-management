import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Header, Main } from "@/views/workspace-detail";
import { NavigationBar } from "@/components/NavigationBar";

export const page = ({ params }: { params: { workspace_id: string } }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NavigationBar />
      <Main />
    </div>
  );
};

export default page;

const CreateListItemCard = () => {
  return (
    <Button className="w-72">
      <Plus size={20} />
      Add List
    </Button>
  );
};
