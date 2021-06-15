import React from "react";
import Link from "next/link";
import Router from "next/router";

export const MenuOverlay = ({ menuState, setMenuState }) => {
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "lg:hidden fixed top-0 right-0 h-full w-full z-10 text-secondary transition-all"
          : "fixed"
      }
      onClick={() => setMenuState(false)}
    >
      <div
        className={
          menuState
            ? "lg:hidden w-80 fixed bg-primary h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
            : "lg:hidden w-0 fixed bg-primary h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
        }
      >
        <div className="relative top-14 flex flex-col items-end pr-10">
          <Link href="/">
            <a className="text-xl my-3 cursor-pointer">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-xl my-3 cursor-pointer">About</a>
          </Link>
          <Link href="/auth/login">
            <a className="text-xl my-3 cursor-pointer ">Login</a>
          </Link>
          <Link href="/auth/register">
            <a className="text-xl my-3 cursor-pointer">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
