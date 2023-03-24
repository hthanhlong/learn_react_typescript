import React, { Children } from "react";

interface Props {
  children: any;
}

const MainLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default MainLayout;
