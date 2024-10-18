"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React, { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { registerSchema } from "@/schemas";
import { wards } from "../../../public/data/busiaWards";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Divide } from "lucide-react";
import { FaMotorcycle } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import TermsConditions from "@/app/(share layout)/terms/page";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";
import { ReloadIcon } from "@radix-ui/react-icons";

const AddMemberForm = () => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "",
      username: "",
      idNumber: "",
      bikeNumber: "",
      riderType: "",
      terms: false,
      ward: "",
      stage: "",
    },
  });
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    // setError(""), setSuccess("");

    // startTransition(() => {
    //   register(values).then((data) => {
    //     setError(data.error);
    //     setSuccess(data.success);
    //   });
    // });
  };

  return (
    <div className="container mb-6 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="@johndoe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="07000123456"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="12345678"
                      {...field}
                    />
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
                    <Input
                      disabled={isPending}
                      placeholder="KMWT1234"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="riderType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Rider</FormLabel>
                <FormControl>
                  <Select
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <Separator className="mt-2 mb-2" />
                        <SelectItem value="Rider">Rider</SelectItem>
                        <SelectItem value="Online Rider">
                          Online Rider
                        </SelectItem>
                        <SelectItem value="Owner">Owner</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormSuccess message={success} />

          <FormError message={error} />

          <div className="mt-12">
            <Button
              disabled={isPending}
              className="w-full bg-bhgreen  mt-2 mb-2 text-white h-12 font-medium rounded-lg  
            "
            >
              Add Member
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddMemberForm;
