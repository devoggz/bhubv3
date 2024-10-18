import { register } from "../../../actions/user";
import { Input } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { getSession } from "@/lib/getSession";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const Register = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/home");

  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white border">
      <form className="space-y-4" action={register}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <Label htmlFor="firstname" className="mb-2">
              Jina La Kwanza
            </Label>
            <Input
              id="firstname"
              placeholder="Mkenya"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="lastname" className="mb-2">
              Jina La Pili
            </Label>
            <Input
              id="lastname"
              placeholder="Daima"
              type="text"
              name="lastname"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="username" className="mb-2">
              Username
            </Label>
            <Input
              id="username"
              placeholder="@mkenyadaima"
              type="text"
              name="username"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="phone" className="mb-2">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="+2547..."
              type="number"
              name="phone"
            />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2" htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="email@bodahub.com"
              type="email"
              name="email"
              className="mb-2"
            />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="***********"
              type="password"
              name="password"
              className="mb-2"
            />
          </div>
        </div>

        <Button type="submit" className="bg-bhgreen relative w-full mb-4">
          Tengeneza akaunti yangu &rarr;
        </Button>
        <div className=" mb-2">
          <p className="text-center text-small">
            Una akaunti tayari{" "}
            <Link
              className="cursor-pointer font-bold text-emerald-500"
              href="/login"
            >
              {" "}
              Login/ Ingia
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
