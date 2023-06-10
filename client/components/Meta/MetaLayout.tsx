import React from "react";
import Head from "next/head";
import { MyTypes } from "../../types/constantTypes";

const MetaLayout: MyTypes["MetaLayoutProps"] = ({
  title = "Task Master X",
  description = "Task Master X is a task management software designed for individuals and teams to help organize and manage their daily tasks",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{`${title} - TMX`}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default MetaLayout;
