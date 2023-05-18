import Link from "next/link";
import { useRouter } from "next/router";

const BSidebar = () => {
  const router = useRouter();

  // router.reload();
  const activeLink = (url, pathname) =>
    pathname === url ? "nav-link active" : "nav-link";

  const arrActiveLink = (url, pathname) => {
    const findData = url.includes(pathname);

    if (findData) {
      return "mininav-toggle nav-link active";
    } else {
      return "mininav-toggle nav-link collapsed";
    }
  };

  return (
    <>
      <nav id="mainnav-container" className="mainnav">
        <div className="mainnav__inner w-[161px] ">
          <div className="pb-5 bg-[#F3F3F3] w-[161px] h-screen scrollable-content">
            <div className="py-3 mainnav__categoriy">
              <h6 className="px-3 mt-0 mainnav__caption fw-bold">TIBCO</h6>
            </div>
            <div className="py-3 mainnav__categoriy">
              <div className="flex">
                <img
                  className="self-center w-5 h-4 mr-1"
                  src="/img/icon/tibcoServer.png"
                />
                <h6 className="px-3 mt-0 mainnav__caption fw-bold">
                  TIBCO 서버
                </h6>
              </div>
              <ul className="mainnav__menu flex-column">
                <li className="nav-item has-sub">
                  <div className="flex">
                    <img
                      className="self-center w-5 h-4 mr-1"
                      src="/img/icon/ems.png"
                    />
                    <Link
                      href="#"
                      className={arrActiveLink(
                        [
                          "/tibco/ems/emsSrvr",
                          "/tibco/ems/emsSrvrHst",
                          "/tibco/ems/emsProp",
                          "/tibco/ems/emsService",
                          "/tibco/ems/emsSvceHst",
                          "/tibco/ems/emsTopicQueue",
                        ],
                        router.pathname
                      )}
                    >
                      <span className="text-black nav-label">EMS</span>
                    </Link>
                  </div>

                  {/* <ul className="mininav-content nav collapse"> */}
                  <ul className="mininav-content">
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsSrvr"
                        className={activeLink(
                          "/tibco/ems/emsSrvr",
                          router.pathname
                        )}
                      >
                        EMS 서버 관리
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsSrvrHst"
                        className={activeLink(
                          "/tibco/ems/emsSrvrHst",
                          router.pathname
                        )}
                      >
                        EMS 서버 이력 조회
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsProp"
                        className={activeLink(
                          "/tibco/ems/emsProp",
                          router.pathname
                        )}
                      >
                        EMS 서버 속성 조회
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsTopicQueue"
                        className={activeLink(
                          "/tibco/ems/emsTopicQueue",
                          router.pathname
                        )}
                      >
                        EMS Queue/Topic 추가
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsService"
                        className={activeLink(
                          "/tibco/ems/emsService",
                          router.pathname
                        )}
                      >
                        EMS 서비스 조회
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/tibco/ems/emsSvceHst"
                        className={activeLink(
                          "/tibco/ems/emsSvceHst",
                          router.pathname
                        )}
                      >
                        EMS 서비스 이력 조회
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BSidebar;
