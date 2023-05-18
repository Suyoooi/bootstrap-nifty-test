import SideMenu from "@/components/sidebar";
import Header from "@/components/header";
import BHeader from "../Bheader";
import BSidebar from "../Bsidebar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header />
      <SideMenu /> */}
      {/* <BHeader /> */}
      {/* 여기서 children은 layout 컴포넌트가 감싸고 있는 다른 컴포넌트를 의미한다. */}
      {/* <main>{children}</main> */}

      {/*PAGE CONTAINER */}
      <div id="root" className="root mn--max hd--expanded">
        {/* content */}
        <section id="content" className="content">
          {props.children}
        </section>
        <BHeader />
        <BSidebar />
      </div>
      <script src="/assets/vendors/popper.min.js" defer></script>
      <script src="/assets/vendors/bootstrap.min.js" defer></script>
      <script src="/assets/js/nifty.js" defer></script>
      <script src="/assets/vendors/mdDateTimePicker.min.js" defer></script>
    </>
  );
}
