import React from "react";
import { ActiveLink } from "./Links";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-10 py-4 flex justify-between border ">
      <div className="flex items-center">
        <ActiveLink activeClassName="" href="/">
          <a className="text-2xl cursor-pointer">Stamina</a>
        </ActiveLink>
      </div>
      <div>
        <Link href="/auth/login">
          <a className="text-xl my-3 mr-4 cursor-pointer">Login</a>
        </Link>
        <Link href="/auth/register">
          <a className="text-xl my-3 cursor-pointer">Register</a>
        </Link>
      </div>
    </div>
  );
};
