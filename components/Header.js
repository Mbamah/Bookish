import React, {useEffect} from "react";
import * as RiIcons from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
const Header = () => {
  const {router} = useRouter()
  const {user, error ,isLoading} = useUser()

  
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  return (
    <header className="bg-[#FEC702]">
      <nav className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="flex items-center underline decoration-double font-['Playfair_Display'] text-2xl">
          <RiIcons.RiBook2Line className="text-white text-2xl" />
          Bookish.
        </h1>

        <ul className="flex items-center font-['Numans'] md:text-xl">
          <li className="mr-7 ">
            <a href="googl.com">Contact</a>
          </li>
          {!user ? (
            <li className="bg-white px-4 py-2 ">
              <a href="/api/auth/login?returnTo=/profile" >
                Login
              </a>
            </li>
          ) : (
            <div className="flex items-center gap-3">
           
              <li className="bg-white px-4 py-2 ">
                <a href="/api/auth/logout">Logout</a>
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
