"use client";

import {
  Button,
  Checkbox,
  ScrollShadow,
  CheckboxGroup,
} from "@nextui-org/react";
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
import TermsConditions from "@/app/(share layout)/terms/page";

const formSchema = z.object({
  terms: z.string(),
});

const AgreeTermsForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    router.replace("/home");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: "",
    },
  });

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <ScrollShadow
            hideScrollBar
            className="w-[344px] h-screen text-justify"
          >
            <TermsConditions />
            {/* <Terms /> */}
          </ScrollShadow>

          <div className="mt-12">
            <Button
              fullWidth
              isLoading={isSubmiting}
              className=" mt-4 text-white h-12 font-medium rounded-lg  bg-gradient-to-r
            from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90%
            animate-appearance-in"
              onPress={handleSubmit}
            >
              Agree
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AgreeTermsForm;
