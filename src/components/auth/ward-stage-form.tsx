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
  ward: z.string().min(3, {
    message: "Select Ward",
  }),
  stage: z.string().min(3, {
    message: "Select Stage",
  }),
});

const WardStageForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    router.push("/role");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ward: "",
      stage: "",
    },
  });

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Ward</FormLabel>
                <FormControl>
                  <Input placeholder="Ward" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Stage</FormLabel>
                <FormControl>
                  <Input placeholder="Stage" {...field} />
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

export default WardStageForm;
