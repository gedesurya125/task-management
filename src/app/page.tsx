import { Button } from "@/components/ui/button";
import { createUser } from "@/prismaClient/queries/createUser";
import { Dashboard } from "@/views/dashboard/Dashboard";

export default async function Home() {
  return <Dashboard />;
}
