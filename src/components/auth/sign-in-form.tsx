"use client";

import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { CustomButton } from "../CustomButton";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
  });

  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // if (form.phoneNumber === "" || form.password === "") {
    //   toast({
    //     variant: "destructive",
    //     title: "Please fill all fields",
    //   });
    // }
    // setIsSubmitting(true);
    // try {
    //   await SignIn(form.phoneNumber, form.password);
    //   const result = await getCurrentUser();
    //   setUser(result);
    //   setIsLogged(true);
    //   toast({
    //     variant: "default",
    //     title: "Success",
    //   });
    router.push("/home");
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="">
      <div className="mb-6 space-y-6">
        <Input
          isRequired
          color="success"
          variant="bordered"
          label="Phone Number"
          type="phoneNumber"
          value={form.phoneNumber}
          onValueChange={(e) => setForm({ ...form, phoneNumber: e })}
        />

        <Input
          isRequired
          color="success"
          variant="bordered"
          label="Password"
          type="password"
          value={form.password}
          onValueChange={(e) => setForm({ ...form, password: e })}
        />
      </div>

      <CustomButton
        fullWidth
        isLoading={isSubmiting}
        isDisabled={isSubmiting}
        onPress={handleSubmit}
        className="mb-6 mt-2 text-white font-medium rounded-lg  bg-gradient-to-r    
            from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% 
            animate-appearance-in"
      >
        Sign In
      </CustomButton>
    </div>
  );
};

export default SignInForm;
