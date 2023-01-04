import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📷 Images" },
  { url: "/videos", text: "📽️ Videos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className="m-3 mb-0 focus:text-blue-700 focus:border-b-2 dark:focus:text-blue-300 focus:border-blue-700 focus:pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
