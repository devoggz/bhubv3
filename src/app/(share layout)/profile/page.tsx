import { Chip, Image, Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { DotFilledIcon } from "@radix-ui/react-icons";
import RegionalChampions from "@/components/RegionalChampions";
import StageMap from "@/components/StageMap";
import Leaderboard from "@/components/Leaderboard";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const Profile = async () => {
  const session = await getSession();
  console.log(session);
  const user = session?.user;

  return (
    <div className="container-fluid mx-auto p-3 space-y-6  mb-12 ">
      <div className="flex flex-col mt-6 items-center justify-center min-h-72 mb-6 rounded-xl ">
        <div className="border-2 border-emerald-500 p-1 mb-4 rounded-full ">
          <Image
            src={user?.image || "/images/avatarPlaceholder.png"}
            alt="avatar"
            height={100}
            width={100}
            className="rounded-full object-cover"
          />
        </div>

        <p className="mt-4 text-xl text-slate-900 font-bold ">
          {user.username}
        </p>

        <Chip
          startContent={<DotFilledIcon className="text-emerald-500 h-8 w-8" />}
          className="bg-emerald-100 font-semibold text-emerald-700 mt-4"
        >
          Active Member
        </Chip>

        <div className="w-full grid grid-cols-2 gap-6 mt-6  mb-3">
          <div className="bg-white shadow-sm border border-emerald-100  flex flex-row p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/trophy.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Points</p>
              <p
                className="text-xl font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-orange-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                5{/* {user?.points} */}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-sm flex flex-row border border-emerald-100 p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/medal.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Level</p>
              <p
                className="text-lg font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-sky-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                Novice
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
        href="https://whatsapp.com/channel/0029VaphVzyKLaHuuL3S8k1J"
      >
        Join Our WhatsApp
      </Link>

      {/* Conditionally render the Add Stage and Add Stage Member links only for admin users */}
      {user?.role === "admin" && (
        <div className="grid grid-cols-2 gap-4 mb-12">
          <Link
            className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
            href="/stage"
          >
            Add Stage
          </Link>
          <Link
            className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
            href="#"
          >
            Add Stage Member
          </Link>
        </div>
      )}

      <div className="w-full">
        <RegionalChampions />
        <Leaderboard />
      </div>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" }); // Redirect to login after sign out
        }}
      >
        <Button className="w-full" type="submit" variant={"outline"}>
          Logout
        </Button>
      </form>
    </div>
  );
};

export default Profile;
