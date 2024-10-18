"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { CustomButton } from "../CustomButton";
import { addStageSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addstage } from "../../../actions/addstage";
import FormSuccess from "../ui/form-success";
import FormError from "../ui/form-error";
z;

interface Location {
  latitude: number;
  longitude: number;
}

const AddStageForm = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [locationAdded, setLocationAdded] = useState<boolean>(false); // Track if location is added
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | "">("");
  const [isSuccess, setSuccess] = useState<string | "">("");
  const router = useRouter(); // Initialize the useRouter hook

  const form = useForm<z.infer<typeof addStageSchema>>({
    resolver: zodResolver(addStageSchema),
    defaultValues: {
      stageName: "",
      county: "",
      sub_county: "",
      ward: "",
      longitude: "",
      latitude: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addStageSchema>) => {
    setError(""), setSuccess("");

    startTransition(() => {
      addstage(values).then((data) => {
        if (data.error) {
          setError(data.error);
        } else if (data.success) {
          setSuccess(data.success);
          // Redirect to the profile page after success
          router.push("/profile");
        }
      });
    });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Set the location state
    setLocation({ latitude, longitude });

    // Autofill latitude and longitude fields in the form
    form.setValue("latitude", latitude.toString());
    form.setValue("longitude", longitude.toString());

    // Set locationAdded to true to disable inputs
    setLocationAdded(true);

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <h2 className="text-2xl font-bold titlecase leading-[48px]">
            Add Stage
          </h2>
          <FormField
            control={form.control}
            name="stageName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stage Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="county"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>County</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sub_county"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub County</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ward</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            className="w-full"
            onClick={handleLocationClick}
            disabled={locationAdded} // Disable the button once location is added
          >
            {locationAdded ? "Location Added" : "Get my location"}
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      disabled={isPending || locationAdded} // Disable once location is added
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      disabled={isPending || locationAdded} // Disable once location is added
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={isSuccess} />
          <FormError message={error} />
          <Button disabled={isPending} className="w-full bg-bhgreen ">
            Add your Stage
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddStageForm;
