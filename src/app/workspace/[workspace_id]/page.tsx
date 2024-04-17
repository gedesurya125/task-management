import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Header, Main } from "@/views/workspace-detail";

export const page = ({ params }: { params: { workspace_id: string } }) => {
  console.log("this is the page prosp", params.workspace_id);

  return (
    <>
      <Header />
      <Main />
    </>
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
