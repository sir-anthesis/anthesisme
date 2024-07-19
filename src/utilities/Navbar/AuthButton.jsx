"use client";
import { useState } from "react";
import Image from "next/image";

const AuthButton = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <Image
          src={image}
          alt="user avatar"
          className="user-img cursor-pointer"
          width={100}
          height={100}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Dashboard
            </a>
            <a
              href="/api/auth/signout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
