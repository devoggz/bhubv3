"use client";

import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  role: z.string().min(3, {
    message: "Role  is Required",
  }),
});

const RoleForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    router.replace("/agreeterms");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
    },
  });

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="mb-4 ">
            <CheckboxGroup
              isRequired
              aria-label="role"
              orientation="horizontal"
              color="success"
              size="sm"
              className="pt-1 "
            >
              <Checkbox value="chairman">Stage Chairman</Checkbox>
              <Checkbox value="rider">Rider</Checkbox>
              <Checkbox value="Owner">Owner</Checkbox>
              <Checkbox value="mechanic">Mechanic</Checkbox>
              <Checkbox value="fan">Fan</Checkbox>
              <Checkbox value="onlineRider">Online Rider</Checkbox>
            </CheckboxGroup>
          </div>

          <div className="mt-12">
            <Button
              fullWidth
              isLoading={isSubmiting}
              className=" mt-4 text-white h-12 font-medium rounded-lg  bg-gradient-to-r
            from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90%
            animate-appearance-in"
              onPress={handleSubmit}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RoleForm;
