import SideMenu from "@/components/SideMenu";
import Header from "@/components/header";
import BHeader from "../Bheader";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SideMenu />
      {/* <BHeader /> */}
      {/* 여기서 children은 layout 컴포넌트가 감싸고 있는 다른 컴포넌트를 의미한다. */}
      {/* <main>{children}</main> */}
    </>
  );
}
