import { Button } from "@/components/ui/button";
import { createUser } from "@/prismaClient/queries/createUser";
import { Header } from "@/views/dashboard";
import { Workspaces } from "@/views/dashboard/workspaces/Workspaces";

export default async function Home() {
  return (
    <>
      <Header />
      <Workspaces />
    </>
  );
}
