import Link from "next/link";
import React, { useState } from "react";

const navItems = [{name:"About", path:'/'}, {name:"Projects", path:'/projects'}, {name:"Resume", path:'/resume'},];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <div>
      <span>{activeItem}</span>
      <div>
        {navItems.map(
          (item) =>
            activeItem !== item.name && (
              <Link key={item.name} href={item.path}>
                <a>
                  <span onClick={()=>setActiveItem(item.name)}>{item.name}</span>
                </a>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Navbar;
