import Link from "next/link";
import React from "react";
import classNames from "../../helpers/classNames";
import { MyTypes } from "../../types/constantTypes";

const SideBar: MyTypes["sideBarPropsTypes"] = ({ navigation, mobileView }) => {
  return (
    <>
      {navigation &&
        navigation.length > 0 &&
        navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref legacyBehavior>
              <a
                className={classNames(
                  item.current
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                  "group flex gap-x-3 rounded-md p-5 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
                {mobileView ? item.name : <span className="sr-only">{item.name}</span>}
              </a>
            </Link>
          </li>
        ))}
    </>
  );
};

export default SideBar;
