"use client";
import { Button } from "@/components/ui/button";
import { createUser } from "@/prismaClient/queries/createUser";
import React from "react";

export const Dashboard = () => {
  const handleClick = async () => {
    const newUser = await createUser();
    console.log("this is the new user", newUser);
  };
  return <Button onClick={handleClick}>CrateUser</Button>;
};
