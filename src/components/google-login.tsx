"use client";
import { login } from "../../actions/auth";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <div
      onClick={() => login("google")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
    >
      <FaGoogle className="text-white" />
      <p className="text-white">Endelea na Google</p>
    </div>
  );
};

export default GoogleLogin;


// "use client";
// import { signIn } from "next-auth/react";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { login } from "../../actions/auth";

// export default function GoogleLogin() {
//   return (
//     <div className="flex items-center justify-center flex-col gap-3 mt-2">
//       <p>au</p>
//       <Button
//         className="w-full"
//         size="lg"
//         variant="outline"
//         onClick={() => login("google")}
//       >
//         {" "}
//         <Image
//           src="/images/googleicon.svg"
//           alt="Google"
//           width={24}
//           height={24}
//           className="mr-4 text-slate-400"
//         />
//         Endelea na Google
//       </Button>
//     </div>
//   );
// }



