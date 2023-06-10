import React from "react";

// Types of Constants data and other types

 interface metaLayoutPropType  {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

 interface navigationItemType  {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

 interface progressBarPropType  {
  progress: string;
};

interface sideBarPropsType {
  navigation : Array<navigationItemType>
  mobileView?: boolean
}
interface mobileViewSideBarPropsType {
  navigation : Array<navigationItemType>
  sidebarOpen:boolean
  setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>
}

interface userNavPropType{
  userNavigation:Array<userNavigationType>
}

 type userNavigationType = { name: string, href: string }

 type  ClassNamestype = string | undefined | null | boolean

export type NavigationItems = Array<navigationItemType>;
export type MetaLayoutProps = React.FC<metaLayoutPropType>
export type userNavigationTypes = Array<userNavigationType>
export type classNamestypes = Array<ClassNamestype>
export type sideBarPropsTypes = React.FC<sideBarPropsType>
export type userNavPropTypes =React.FC<userNavPropType>
export type progressBarPropTypes =React.FC<progressBarPropType>
export type mobileViewSideBarPropsTypes = React.FC<mobileViewSideBarPropsType>

export type MyTypes = {
  NavigationItems: NavigationItems;
  MetaLayoutProps: MetaLayoutProps;
  userNavigationTypes: userNavigationTypes;
  classNamestypes: classNamestypes;
  sideBarPropsTypes: sideBarPropsTypes;
  userNavPropTypes: userNavPropTypes;
  mobileViewSideBarPropsTypes: mobileViewSideBarPropsTypes;
  progressBarPropTypes:progressBarPropTypes
};
