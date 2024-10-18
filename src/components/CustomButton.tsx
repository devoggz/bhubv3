import { extendVariants, Button } from "@nextui-org/react";

export const CustomButton = extendVariants(Button, {
  variants: {
    color: {
      olive: "text-[#000] bg-[#84cc16]",
      blue: "text-[#fff] bg-[#006fee]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
      bhteal: "bg-[#12dac6] text-[#fff]",

      bhpink: " bg-[#da09b3] text-[#fff] ",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-md",
      md: "px-4 min-w-20 h-10 text-sm gap-2 rounded-lg",
      xl: "px-8 min-w-36 h-14 text-lg gap-4 rounded-full",
    },
  },
  defaultVariants: {
    color: "bhteal",
    size: "md",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "olive",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});
