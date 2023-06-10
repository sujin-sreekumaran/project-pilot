import React from "react";
import { MyTypes } from "../../types/constantTypes";
import classNames from "../../helpers/classNames";
import { Menu } from "@headlessui/react";

const UserNav: MyTypes["userNavPropTypes"] = ({ userNavigation }) => {
  return (
    <>
      {userNavigation.map((item) => (
        <Menu.Item key={item.name}>
          {({ active }) => (
            <a
              href={item.href}
              className={classNames(
                active ? "bg-gray-50" : "",
                "block px-3 py-1 text-sm leading-6 text-gray-900"
              )}
            >
              {item.name}
            </a>
          )}
        </Menu.Item>
      ))}
    </>
  );
};

export default UserNav;
