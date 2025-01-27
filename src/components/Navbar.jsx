import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/posts?sort=trending", label: "Trending" },
    { to: "/posts?sort=popular", label: "Most Popular" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className={`w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-6 ${
        open ? "fixed-nav-open" : ""
      }`}
      ref={navRef}
    >
      <Link
        to="/"
        className="flex items-center gap-4 text-2xl font-extrabold tracking-wide text-white hover:text-blue-400 transition-all duration-300"
      >
        <img
          src="/logo.png"
          alt="Vago Logo"
          className="w-12 h-12 ml-[-30px] rounded-full shadow-lg border-2 border-blue-400"
        />
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
          VAGO Blog
        </span>
      </Link>

      <div className="md:hidden flex items-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <button
          className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link
                to="/"
                className="flex items-center gap-4 text-2xl font-bold"
                onClick={() => setOpen(false)}
              >
                <img src="/logo.png" alt="Vago Logo" className="w-8 h-8" />
                <span>VAGO</span>
              </Link>
              <button
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col items-center justify-center h-full gap-8 font-medium text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-2 py-1 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <SignedOut>
                  <Link to="/login" onClick={() => setOpen(false)}>
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                      Login 👋
                    </button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-blue-600">
            {link.label}
          </Link>
        ))}
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
