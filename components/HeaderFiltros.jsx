import { React, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CogIcon,
  HomeIcon,
  MenuIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

import {
  CreditCard,
  Logout,
  PersonOutlineOutlined,
  SaveAsOutlined,
} from "@mui/icons-material";

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const navigation = [
  { name: "Comprar", icon: "", href: "/propiedades", current: false },
  { name: "Rentar", icon: "", href: "/propiedades", current: false },
];

const navigationMobile = [
  { name: "Comprar", href: "#", current: false },
  { name: "Rentar", href: "#", current: false },
  { name: "Desarrollos Inmobiliarios", href: "#", current: false },
  { name: "Notarías", href: "#", current: false },
  { name: "Brokers Inmobiliarios", href: "#", current: false },
  { name: "Solicitar Crédito", href: "#", current: false },
];

const mainMenu = [
  {
    title: "Buscar inmuebles",
    icon: <SearchIcon className="w-auto h-4 pr-2 text-red-digiliario" />,
    url: "#",
  },

  {
    title: "Desarrollos",
    icon: (
      <OfficeBuildingIcon className="w-auto h-4 pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Notarías",
    icon: (
      <OfficeBuildingIcon className="w-auto h-4 pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Brokers Hipotecarios",
    icon: (
      <PersonOutlineOutlined className="w-auto h-4 pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Inventario",
    icon: <HomeIcon className="w-auto h-4 pr-2 text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Leads",
    icon: <UsersIcon className="w-auto h-4 pr-2 text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Suscripción",
    icon: <CreditCard className="w-auto h-4 pr-2 text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Configuraciones",
    icon: <CogIcon className="w-auto h-4 pr-2 text-red-digiliario " />,
    url: "#",
  },
  {
    title: "Cerrar sesión",
    item: "logout",
    icon: <Logout className="w-auto h-4 pr-2 text-red-digiliario" />,
    url: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderFiltros() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white shadow-md ">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-screen-3xl ">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu bar */}
              <div className="absolute right-0 items-center md:left-0 md:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  {open ? (
                    <XIcon
                      className="block w-6 h-6 text-red-digiliario"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block w-6 h-6 text-red-digiliario hover:text-black-digiliario"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/*  End Mobile menu bar */}

              <div className="left-0 flex items-center justify-center md:flex-1 sm:items-stretch sm:justify-start ">
                <div className="items-center flex-shrink-0 cursor-pointer md:flex">
                  <Link href="/propiedades">
                    <img
                      className="w-auto h-10 pr-3 md:block"
                      src="/digiliario-logo.svg"
                      alt="digilirio"
                    />
                  </Link>
                </div>

                {/* <div className="flex items-center flex-shrink-0 md:hidden">
                  <img
                    className="block w-auto h-8 pr-3"
                    src="/digiliario-logo-icon.svg"
                    alt="digilirio"
                  />
                </div> */}

                <div className="flex items-center ">
                  <div className="items-center hidden space-x-2 md:flex ">
                    <div className="flex text-sm border-2 border-gray-300 rounded-lg font-gilmerBold ">
                      <input
                        placeholder="Búsqueda de inmueble por tipo, ciudad, colonia, código postal..."
                        className="outline-hidden outline-none placeholder:text-gray-500 px-3 py-2 bg-transparent md:min-w-[550px] lg:max-w-[350px]  "
                      ></input>
                    </div>
                  </div>
                  <div className="hidden ml-2 md:hidden lg:block ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "hover:bg-red-digiliario hover:text-white font-gilmerBold text-sm hover:bg-red-500 md:px-3 px-1.5 md:py-2.5 rounded-md  font-medium  "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div className="hidden ml-2 md:hidden lg:block">
                    <Link href="/propiedades">
                      <a
                        target="_blank"
                        className={classNames(
                          "bg-red-digiliario text-white font-gilmerBold text-sm hover:bg-red-500 md:px-3 px-1.5 py-2 rounded-md flex items-center gap-2"
                        )}
                      >
                        Solicitar crédito
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile dropdown */}
              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:flex ">
                <Menu as="div" className="relative">
                  <span className="sr-only">Open Menu</span>
                  <div className="flex items-center gap-2 ">
                    <UserCircleIcon className="w-7 text-red-digiliario " />

                    <Menu.Button className="flex rounded-full text-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white">
                      <AiOutlineMenu
                        size={20}
                        className="text-red-digiliario"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 py-1 mt-6 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black-digiliario ring-opacity-5 focus:outline-none">
                      {mainMenu.map(({ title, icon, url, item }, index) => (
                        <div key={index}>
                          {item == "logout" ? (
                            <a
                              href="#"
                              className={classNames(
                                "flex items-center px-4 py-2 text-md text-black-digiliario font-gilmerMedium"
                              )}
                            >
                              {icon}
                              {title}
                            </a>
                          ) : (
                            <Link href={url}>
                              <a
                                href={url}
                                className={classNames(
                                  "flex items-center px-4 py-2 text-md text-black-digiliario font-gilmerBold hover:text-red-digiliario"
                                )}
                              >
                                {icon}
                                {title}
                              </a>
                            </Link>
                          )}
                        </div>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/* End Profile Dropdown */}
            </div>
          </div>
          {/* Menu mobile */}

          <Disclosure.Panel className="absolute w-full sm:hidden ">
            <div className="px-2 pb-8 space-y-1 border-t-2 bg-gray-50 ">
              <div className="pt-2"></div>
              {mainMenu.map(({ title, icon, url, item }, index) => (
                <div key={index}>
                  {item == "logout" ? (
                    <a
                      href="#"
                      className={classNames(
                        "flex items-center px-4 py-2 text-md text-black-digiliario font-gilmerMedium"
                      )}
                    >
                      {icon}
                      {title}
                    </a>
                  ) : (
                    <Link href={url}>
                      <a
                        href={url}
                        className={classNames(
                          "flex items-center px-4 py-2 text-md text-black-digiliario font-gilmerBold hover:text-red-digiliario"
                        )}
                      >
                        {icon}
                        {title}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
          {/* End Menu mobile */}
        </>
      )}
    </Disclosure>
  );
}

export default HeaderFiltros;
