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
  idNumber: z.string().min(3, {
    message: "ID Number is Required",
  }),
  bikeNumber: z.string().min(3, {
    message: "Bike Number is Required",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone Number is required",
  }),
});

const NumberForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    router.replace("/ward");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idNumber: "",
      bikeNumber: "",
      phoneNumber: "",
    },
  });

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0700123456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="idNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Number</FormLabel>

                <FormControl>
                  <Input placeholder="000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bikeNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bike Number</FormLabel>
                <FormControl>
                  <Input placeholder="KWTB0000" {...field} />
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

export default NumberForm;
