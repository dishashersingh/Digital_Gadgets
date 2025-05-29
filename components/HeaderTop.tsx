"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones, FaRegEnvelope, FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };

  return (
    <div className="bg-blue-500 text-white text-sm sm:text-base">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-10 lg:h-12 flex-wrap gap-y-2 py-1">
        {/* Left Info Section */}
        <ul className="flex items-center gap-x-4 sm:gap-x-6 flex-wrap">
          <li className="flex items-center gap-x-2 font-medium">
            <FaHeadphones className="text-white text-base sm:text-lg" />
            <span>+91 8178932123</span>
          </li>
          <li className="flex items-center gap-x-2 font-medium">
            <FaRegEnvelope className="text-white text-base sm:text-lg" />
            <span>test@email.com</span>
          </li>
        </ul>

        {/* Right Auth Section */}
        <ul className="flex items-center gap-x-4 sm:gap-x-6 font-medium flex-wrap">
          {!session ? (
            <>
              <li>
                <Link href="/login" className="flex items-center gap-x-2 hover:underline">
                  <FaRegUser className="text-white text-base sm:text-lg" />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex items-center gap-x-2 hover:underline">
                  <FaRegUser className="text-white text-base sm:text-lg" />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="text-white hidden sm:inline">{session.user?.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-x-2 hover:underline"
                >
                  <FaRegUser className="text-white text-base sm:text-lg" />
                  <span>Log out</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
