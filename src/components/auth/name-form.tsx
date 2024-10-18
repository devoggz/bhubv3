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
  name: z.string().min(3, {
    message: "Name must be atlease 3 characters long",
  }),
  username: z.string().min(3, {
    message: "Name must be atlease 3 characters long",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone Number is required",
  }),
});

const NameForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    router.replace("/numbers");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
    },
  });

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

export default NameForm;
