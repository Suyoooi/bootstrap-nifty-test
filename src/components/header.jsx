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
            <div className="ml-10 flex items-baseline space-x-4">
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
                  <div className="absolute z-50 mt-2 w-screen rounded-md bg-[#292929] shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link href="#">
                        <div
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Account settings
                        </div>
                      </Link>
                      <div
                        href="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Support
                      </div>
                      <div
                        href="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        License
                      </div>
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-3 text-white">
                <div>portal / 홍길동</div>
                {/* <div>/</div>
                <div>홍길동</div> */}
                <img
                  className="h-4 w-4 self-center"
                  src="/img/icon/profile.png"
                />
                <img className="h-4 w-4 self-center" src="/img/icon/lock.png" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
