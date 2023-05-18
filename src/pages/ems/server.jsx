import Link from "next/link";
import Image from "next/image";

const EmsServer = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/portal">
            <Image
              src="/img/icon/portalLogo.png"
              alt="EMAPP Logo"
              className="EMAPP logo"
              width={121}
              height={24}
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default EmsServer;
