import { ClientLogger } from "@/components/ClientLogger";
import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/button";
import { createUser } from "@/prismaClient/queries/createUser";
import { getWorkspaces } from "@/prismaClient/queries/getWorkspaces";
import { Header } from "@/views/dashboard";
import { Workspaces } from "@/views/dashboard/workspaces/Workspaces";

export default async function Home() {
  const workspaces = await getWorkspaces();

  return (
    <>
      <NavigationBar />
      <Header />
      <Workspaces workspaces={workspaces} />
    </>
  );
}
