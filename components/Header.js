import React, {useEffect} from "react";
import * as RiIcons from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
const Header = () => {

  const {user, error ,isLoading} = useUser()

  
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  return (
    <header className="bg-[#fff] top-0 sticky z-50 shadow-md">
      <nav className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="flex items-center underline decoration-double font-['Playfair_Display'] text-2xl">
          <RiIcons.RiBook2Line className="text-[#FEC702] text-2xl" />
          Bookish.
        </h1>

        <ul className="flex items-center font-['Numans'] md:text-lg">
          <li className="mr-7 ">
            <a href="googl.com">Contact</a>
          </li>
          {!user ? (
            <li className="bg-[#FEC702] text-gray-900 px-4 py-2 ">
              <Link href="/api/auth/login?returnTo=/profile">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <div className="flex items-center gap-3">
              <li className="bg-[#FEC702] px-4 py-2 ">
                <Link href="/api/auth/logout">
                  <a>Logout</a>
                </Link>
              </li>
              <p className="text-sm">{user.nickname}</p>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
