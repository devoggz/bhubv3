export { auth as middleware } from "@/auth";

export const config = {
  unstable_allowDynamic: [
    "/node_modules/@babel/runtime/regenerator/index.js",
    "/node_modules/next-auth/react/index.js",
  ],
};
