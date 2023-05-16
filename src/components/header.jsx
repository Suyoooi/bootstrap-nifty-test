import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="flex bg-[#292929]">
      <nav className="flex h-[50px] max-w-7xl items-center justify-between">
        <div className="ml-[30px] flex items-center">
          {/* <div className="flex-shrink-0"> */}
          <img
            className="w-[121px]"
            src="/img/icon/portalLogo.png"
            alt="portal logo"
          />
          {/* </div> */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {/* <Link href="/">
                <div className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">
                  Dashboard
                </div>
              </Link> */}
              <div className="relative">
                <button
                  className="px-3 py-2 text-sm font-medium text-white focus:outline-none"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? "메뉴 전체닫기" : "메뉴 전체보기"}
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-50 mt-2 w-screen h-64 bg-[#292929] shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1 w-[180px]"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="block pl-2.5 py-1 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        TIBCO
                      </div>
                      <div
                        className="block py-1 pl-5 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        TIBCO 서버 관리
                      </div>
                      <div
                        className="block pl-2.5 py-1 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS
                      </div>
                      <Link href="#">
                        <div
                          className="block py-1 pl-5 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          EMS 서버 관리
                        </div>
                      </Link>
                      <div
                        href="#"
                        className="block py-1 pl-5 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS 서버 이력 조회
                      </div>
                      <div
                        href="#"
                        className="block py-1 pl-5 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS 서버 이력 조회
                      </div>
                      <div
                        href="#"
                        className="block py-1 pl-5 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS 속성 조회
                      </div>
                      <div
                        href="#"
                        className="block px-4 py-1 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS Queue / Topic 추가
                      </div>
                      <div
                        href="#"
                        className="block px-4 py-1 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS 서비스 조회
                      </div>
                      <div
                        href="#"
                        className="block px-4 py-1 text-xs text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        EMS 서비스 이력 조회
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-3 text-white">
                <div>portal / 홍길동</div>
                {/* <div>/</div>
                <div>홍길동</div> */}
                <img
                  className="self-center w-4 h-4"
                  src="/img/icon/profile.png"
                />
                <img className="self-center w-4 h-4" src="/img/icon/lock.png" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
