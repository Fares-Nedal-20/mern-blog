import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 p-3">
      <h1 className="text-lg sm:text-2xl font-semibold dark:text-white whitespace-nowrap">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-2 px-1 text-white">
          Fares's
        </span>{" "}
        Blog
      </h1>
      <form className="hidden md:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>
      <form className="md:hidden">
        <Button pill color="gray">
          <AiOutlineSearch />
        </Button>
      </form>
      <div className="flex gap-2 items-center md:order-1">
        <Button color="gray" pill>
          <FaMoon />
        </Button>
        <Button>SignUp</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
