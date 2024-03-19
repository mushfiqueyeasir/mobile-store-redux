import React from "react";
import {  NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

const Menu = ({ menu }) => {
  return (
   
      <>
        {Object.values(menu).map((item, index) =>
          typeof item === "string" ? (
            <li key={index}>
              <NavLink to={item.toLocaleLowerCase()} className="capitalize">
                {item}
              </NavLink>
            </li>
          ) : (
            <SubMenu key={index} data={item} title={Object.keys(menu)[index]} />
          )
        )}
      </>
    
  );
};

export default Menu;
