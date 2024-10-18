"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import { Routes } from "@/app/(share layout)/routes";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Bell } from "lucide-react";
import { NotificationIcon } from "./ui/notification";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      id: 1,
      label: "Kampuni Yetu",
      path: Routes.public.about,
    },
    {
      id: 2,
      label: "Sera ya Kulinda Data",
      path: Routes.public.privacy,
    },
    // {
    //   id: 3,
    //   label: "Accounti Yangu",
    //   path: Routes.public.settings,
    // },
    {
      id: 4,
      label: "Masharti na Vigezo vya BodaHub",
      path: Routes.public.terms,
    },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="/images/logoIcon.png" alt="BodaHub" width={50} />
          {/* <p className="font-bold text-inherit">BodaHub</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Badge content="9+" shape="circle" color="danger">
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
            >
              <NotificationIcon
                size={24}
                height={undefined}
                width={undefined}
              />
            </Button>
          </Badge>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path} className="px-5 capitalize ">
              {item.label}
            </Link>
          </li>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
