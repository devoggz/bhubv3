"use client";

import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { CustomButton } from "../CustomButton";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    role: "",
    ward: "",
    stage: "",
    terms: false,
    phoneNumber: "",
    password: "",
  });

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.username === "" ||
      form.role === "" ||
      form.phoneNumber === "" ||
      form.ward === "" ||
      form.stage === "" ||
      form.terms === true ||
      form.password === ""
    ) {
      toast({
        title: "Please fill all fields",
      });
    }

    setIsSubmitting(true);
  };

  return (
    <>
      <div className=" space-y-3">
        <div
          className="grid grid-cols-2 items-center justify-center 
        gap-2 "
        >
          <Input
            isRequired
            color="success"
            variant="bordered"
            label="First Name"
            value={form.firstName}
            onValueChange={(e) => setForm({ ...form, firstName: e })}
          />
          <Input
            isRequired
            color="success"
            variant="bordered"
            label="Last Name"
            value={form.lastName}
            onValueChange={(e) => setForm({ ...form, lastName: e })}
          />
        </div>
        <div>
          <Input
            isRequired
            color="success"
            variant="bordered"
            label="Username"
            value={form.username}
            onValueChange={(e) => setForm({ ...form, username: e })}
          />
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-2 ">
          <Input
            isRequired
            color="success"
            variant="bordered"
            label="Ward"
            value={form.ward}
            onValueChange={(e) => setForm({ ...form, ward: e })}
          />
          <Input
            isRequired
            color="success"
            variant="bordered"
            label="Stage"
            value={form.stage}
            onValueChange={(e) => setForm({ ...form, stage: e })}
          />
        </div>
        <div className="mb-4">
          <Input
            isRequired
            type="password"
            color="success"
            variant="bordered"
            label="Password"
            value={form.password}
            onValueChange={(e) => setForm({ ...form, password: e })}
          />

          {/* <Input
            isRequired
            radioGroup="role"
            variant="flat"
            label="Role"
            value={form.role}
            onValueChange={(e) => setForm({ ...form, role: e })}
          /> */}
        </div>
        <div>
          <h4 className="font-semibold">Who are you?</h4>
          <p className="text-sm text-emerald-500">
            You can select more than one
          </p>
        </div>

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
            <Checkbox value="fan">Non Rider/Owner</Checkbox>
          </CheckboxGroup>
        </div>
        <div className="">
          <CustomButton
            fullWidth
            isLoading={isSubmiting}
            className=" mt-4 text-white font-medium rounded-lg  bg-gradient-to-r    
            from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% 
            animate-appearance-in"
            onPress={handleSubmit}
          >
            Create Account
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
