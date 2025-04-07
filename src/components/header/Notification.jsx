import { useRef, useState } from "react";
import { useTabs } from "../../hooks/useTabs";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";

function Notification() {
  const notificationApi = [
    {
      title: "Título Notificação Settings",
      description: "Descrição Notificação",
      img: "https://placehold.co/32x32",
      link: "settings",
    },
    {
      title: "Título Notificação",
      description: "Descrição Notificação",
      img: "https://placehold.co/32x32",
      link: "/",
    },
  ];

  const messageApi = [
    {
      title: "Título Mensagem Settings",
      description: "Descrição Mensagem",
      img: "https://placehold.co/32x32",
      link: "settings",
    },
    {
      title: "Título Mensagem",
      description: "Descrição Mensagem",
      img: "https://placehold.co/32x32",
      link: "/",
    },
  ];

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { setActiveTab, isActive } = useTabs("notifications");

  const notificationRef = useRef(null);

  useOutsideClick(notificationRef, () => setIsNotificationOpen(false));

  return (
    <li className="mr-1 relative" ref={notificationRef}>
      <button
        type="button"
        onClick={() => setIsNotificationOpen((prev) => !prev)}
        className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
      >
        <i className="ri-notification-3-line"></i>
        {/* Badge */}
        {notificationApi.length + messageApi.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] leading-none font-bold px-1.5 py-0.5 rounded-full">
            {notificationApi.length + messageApi.length}
          </span>
        )}
      </button>
      <div
        className={`${
          isNotificationOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute right-0 mt-2 shadow-md shadow-black/5 z-30 max-w-xs w-72 sm:w-80 md:w-96 bg-white rounded-md border border-gray-100 transition-opacity duration-300 ease-in-out`}
      >
        <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 space-x-6">
          <button
            type="button"
            onClick={() => setActiveTab("notifications")}
            className={`relative text-[13px] font-medium pb-1 border-b-2 ${
              isActive("notifications")
                ? "text-gray-600 border-blue-500"
                : "text-gray-400 border-b-transparent hover:text-gray-600"
            }`}
          >
            Notificações
            {notificationApi.length > 0 && (
              <span className="absolute -top-1 -right-4 bg-red-500 text-white text-[10px] leading-none font-bold px-1 py-0.5 rounded-full">
                {notificationApi.length}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("messages")}
            className={`relative text-[13px] font-medium pb-1 border-b-2 ${
              isActive("messages")
                ? "text-gray-600 border-blue-500"
                : "text-gray-400 border-b-transparent hover:text-gray-600"
            }`}
          >
            Mensagens
            {messageApi.length > 0 && (
              <span className="absolute -top-1 -right-4 bg-red-500 text-white text-[10px] leading-none font-bold px-1 py-0.5 rounded-full">
                {messageApi.length}
              </span>
            )}
          </button>
        </div>
        <div className="my-2">
          {isActive("notifications") && (
            <ul className="max-h-64 overflow-y-auto">
              {notificationApi.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {isActive("messages") && (
            <ul className="max-h-64 overflow-y-auto">
              {messageApi.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
export default Notification;
