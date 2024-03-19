import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ data, title }) => {
  return (
    <li>
      <details>
        <summary>{title}</summary>
        <ul className="p-2">
          {Object.values(data).map((item, index) =>
            typeof item === "string" ? (
              <li key={index}>
                <Link to={item.toLocaleLowerCase()} className="capitalize">
                  {item}
                </Link>
              </li>
            ) : (
              <SubMenu
                key={index}
                data={item}
                title={Object.keys(data)[index]}
              />
            )
          )}
        </ul>
      </details>
    </li>
  );
};

export default SubMenu;
