import BHeader from "../Bheader";
import BSidebar from "../Bsidebar";

export default function LayoutTest({ children }) {
  return (
    <>
      <div id="root" className="root mn--max hd--expanded">
        {/* content */}
        <section id="content" className="content">
          {children}
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
