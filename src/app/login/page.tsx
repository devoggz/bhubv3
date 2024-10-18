import { login } from "../../../actions/user";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@nextui-org/react";
import { signIn } from "@/auth";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Image } from "@nextui-org/react";
import { getSession } from "@/lib/getSession";

const Login = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/home");

  return (
    <div className="container  mt-10 w-full p-6 space-y-4 rounded-lg">
      <div className="w-full aspect-video">
        <Image
          src="/images/auth.jpeg"
          alt="welcome"
          width={1920}
          height={400}
          className="object-cover"
        />
      </div>
      <h2 className="  text-2xl font-bold titlecase leading-[48px] ">
        Login/Ingia
      </h2>

      <form className="space-y-6" action={login}>
        {" "}
        <Label htmlFor="phone">Nambari ya Simu</Label>
        <Input
          id="phone"
          size="lg"
          placeholder="0700123456"
          type="number"
          name="phone"
          className="mb-6"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="*********"
          type="password"
          size="lg"
          name="password"
          className="mb-6"
        />
        <Button type="submit" className="bg-bhgreen relative w-full">
          Login &rarr;
        </Button>
        <div className=" mb-2">
          <p className="text-center text-small">
            Hauna akaunti? {""}
            <Link
              className="cursor-pointer font-bold text-emerald-500"
              href="/register"
            >
              Sajili/ Tengeneza akaunti yako
            </Link>
          </p>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
};

export default Login;
