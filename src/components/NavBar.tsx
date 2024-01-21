"use client";

import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav
      className="relative shadow-md"
      style={{ background: "linear-gradient(to right, #004aad, #cb6ce6)" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center">
                <span className="mb-0 cursor-pointer text-xl tracking-wide	 text-black hover:text-gray-900 sm:text-2xl sm:text-2xl">
                  Potential
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {/* <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Go Somewhere Else
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
