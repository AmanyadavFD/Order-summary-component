import { type FC, type ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="main-layout">{children}</main>;
};

export default Layout;
