import React from "react";
import SearchInput from "./SearchInput";
import ModeToggler from "./theme-change/ModeToggle";
import ToggleSearch from "./ToggleSearch";

const Navbar = () => {
  return (
    <nav className="navbar p-0 bg-transparent justify-between px-14 z-20">
      <div className="flex">
        <div className="dropdown text-primary-content">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-primary-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost hidden text-xl lg:flex text-primary-content">
          MovieNext
        </a>
      </div>

      <div className="hidden sm:flex w-[40rem]">
        <SearchInput />
      </div>

      <div className="w-fit justify-between flex">
        <ToggleSearch />
        <button className="btn btn-ghost btn-circle text-primary-content">
          <div className="indicator">
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
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs bg-accent indicator-item"></span>
          </div>
        </button>
        <ModeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
