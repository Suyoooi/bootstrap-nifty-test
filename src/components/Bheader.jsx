import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const BHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/ems/server">
            <Image
              src="/img/icon/portalLogo.png"
              alt="EMAPP Logo"
              className="EMAPP logo"
              width={121}
              height={24}
            />
          </Link>
          <button className="px-3 py-2 ml-[30px]" onClick={toggleDropdown}>
            {isDropdownOpen ? "메뉴 전체닫기" : "메뉴 전체보기"}
          </button>
          <div className="flex gap-3">
            <div>portal</div>
            <div>/</div>
            <div>홍길동</div>
            <img className="self-center w-4 h-4" src="/img/icon/profile.png" />
            <img className="self-center w-4 h-4" src="/img/icon/lock.png" />
          </div>
          {isDropdownOpen && (
            <div className="absolute z-50 ml-[161px] mt-[307px] w-screen h-64 bg-[#292929] shadow-lg ring-1 ring-black ring-opacity-5">
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
      </header>
    </>
  );
};

export default BHeader;
