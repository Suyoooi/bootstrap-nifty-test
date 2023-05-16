import { useState } from "react";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSideMenuClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <div className={isOpen ? "visible" : "hidden"}>
        <div className="flex h-screen w-48 flex-col justify-between  bg-[#F3F3F3]">
          <div className="ml-[10px] font-normal">
            <div className="flex justify-between">
              <div className="flex items-center h-14">TIBCO</div>
              <img
                onClick={handleSideMenuClick}
                className="self-center w-5 h-5 mr-2 cursor-pointer"
                src="/img/icon/vector.png"
              />
            </div>
            <ul className="flex flex-col mt-6 text-center">
              <li className="flex mb-4">
                <img
                  className="self-center w-5 h-4 mr-1"
                  src="/img/icon/tibcoServer.png"
                />
                <a href="#" className="text-black">
                  TIBCO 서버
                </a>
              </li>
              <li className="flex mb-4">
                <img
                  className="self-center w-5 h-4 mr-1"
                  src="/img/icon/ems.png"
                />
                <a href="#" className="text-black">
                  EMS
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS 서버 관리
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS 서버 이력 조회
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS 속성 조회
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS Queue / Topic 추가
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS 서비스 조회
                </a>
              </li>
              <li className="mb-2.5 ml-6 self-start">
                <a href="#" className="text-xs text-[#666666]">
                  EMS 서비스 이력 조회
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center h-14">
            <div
              className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-900"
              onClick={toggleMenu}
            >
              {isOpen ? "-" : "+"}
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "hidden" : "visible"}>
        <div className="flex h-screen w-12 flex-col justify-between  bg-[#F3F3F3]">
          <img
            onClick={handleSideMenuClick}
            className="self-center w-5 h-5 mt-4 mr-2 rotate-180 cursor-pointer"
            src="/img/icon/vector.png"
          />
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
