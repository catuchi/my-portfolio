import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  const navLinkSyle1 = ({ isActive }) => {
    return {
      color: isActive ? "white" : "#fff5f5",
    };
  };

  const navLinkSyle2 = ({ isActive }) => {
    return {
      color: isActive ? "#fff5f5" : "#fed7d7",
      backgroundColor: isActive ? "#c53030" : "",
    };
  };

  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact="true"
            style={navLinkSyle2}
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Chibu
          </NavLink>
          <NavLink
            to="/post"
            style={navLinkSyle2}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            style={navLinkSyle2}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            style={navLinkSyle2}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/catuchi"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/chibu-atuchi/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
