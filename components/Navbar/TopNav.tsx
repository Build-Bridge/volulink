'use client';
import Link from "next/link";
import React, {useState} from "react";
import { CiMenuFries } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter()
  const [active,setActive] = useState<number>(0);
  const [mobileNav,setMobileNav] = useState<boolean>(false);

  const navItems = [
    { id: 0, value: "Home" },
    { id: 1, value: "About Us" },
    { id: 2, value: "Contact" },
    { id: 3, value: "For Volunteers" },
    { id: 4, value: "For Organizers" }
  ]
  return (
    <div className=" nav flex justify-between items-center">
      <Link href={"/"} className="font-semibold text-black text-[27px]">
        VoluLink
      </Link>


      <ul className={`flex justify-between gap-4 text-sm max-md:hidden max-md:right-0`}>
      {navItems.map((item : any, i : number) => (
        <li key={item.id} className={active === item.id ? 'nav-active' : 'text-[rgb(0,3,10,0.64)]'} onClick={() => setActive(item.id)}>
          {item.value}
        </li>
      ))}
      </ul>
      <div className="flex gap-2 max-md:hidden">
        <button onClick={() => router.push('/auth/login')} className="btn outline outline-1 outline-black ">
          Sign in
        </button>
        <button onClick={() => router.push('/auth/signup')} className="btn bg-black text-white py-2">Sign up</button>
      </div>

      <div className="md:hidden">
        <LuMenu size={25} className="cursor-pointer " onClick={() => setMobileNav(!mobileNav)}/>
        <ul className={`flex flex-col gap-2 bg-white border mt-3 p-5 fixed right-5 z-50 rounded-xl ${mobileNav ? 'grid' : 'hidden'} `}>
          {navItems.map((item : any, i : number) => (
          <li key={item.id} className={active === item.id ? 'nav-active' : 'text-[rgb(0,3,10,0.64)]'} onClick={() => setActive(item.id)}>
            {item.value}
          </li>
        ))}

          <button onClick={() => router.push('/auth/login')} className="btn outline outline-1 outline-black ">
            Sign in
          </button>
          <button onClick={() => router.push('/auth/signup')} className="btn bg-black text-white py-2.5">Sign up</button>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
