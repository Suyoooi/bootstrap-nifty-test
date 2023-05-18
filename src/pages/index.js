import EmsServer from "@/pages/ems/server";
import Layout from "@/components/layout/layout";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import BHeader from "@/components/Bheader";
import BSidebar from "@/components/Bsidebar";
import Test from "./ems/test";
import EmsSrvr from "./tibco/ems/emsSrvr";
import LayoutTest from "@/components/layout/layoutTest";
import EmsSrvrHst from "./tibco/ems/emsSrvrHst";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <LayoutTest>
        <EmsSrvr />
      </LayoutTest> */}
      <Header />
      <Sidebar />
    </>
  );
}
