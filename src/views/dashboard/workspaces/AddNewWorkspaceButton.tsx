"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { string, object } from "yup";
import React from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Form, useField } from "formik";

const workspaceSchema = object({
  title: string().required(),
  description: string().required(),
});

export const AddNewWorkspaceButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Card className="p-4 flex items-center border-dashed border-black">
            <Plus />
            <CardTitle className="text-base mt-0 ml-2 ">
              Add Workspace
            </CardTitle>
          </Card>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Workspace</DialogTitle>
          <DialogDescription>Fill the workspace Detail here</DialogDescription>
        </DialogHeader>
        <Formik
          enableReinitialize
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={(values) => {
            console.log("this is the formik values", values);
          }}
          validationSchema={workspaceSchema}
        >
          {({ handleBlur, handleChange, values }) => {
            return (
              <Form>
                <div className="grid gap-4 py-4">
                  <TextInput id="title" name="title" label="title" />
                  <TextInput
                    id="description"
                    name="description"
                    label="description"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

const TextInput = ({
  id,
  name,
  label,
}: {
  id: string;
  name: string;
  label: string;
}) => {
  const [field, meta, helper] = useField(name);
  return (
    <div className="grid grid-cols-4 items-center gap-x-4">
      <Label htmlFor={id} className="text-right">
        {label}
      </Label>
      <Input id={id} className="col-span-3" {...field} />
      {meta.touched && meta.error ? (
        <span className="error col-start-2 col-span-3 text-destructive mt-1">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};
