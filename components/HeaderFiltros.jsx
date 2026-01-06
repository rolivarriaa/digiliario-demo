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
    icon: <SearchIcon className="h-4 w-auto pr-2 text-red-digiliario" />,
    url: "#",
  },

  {
    title: "Desarrollos",
    icon: (
      <OfficeBuildingIcon className="h-4 w-auto pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Notarías",
    icon: (
      <OfficeBuildingIcon className="h-4 w-auto pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Brokers Hipotecarios",
    icon: (
      <PersonOutlineOutlined className="h-4 w-auto pr-2 text-red-digiliario" />
    ),
    url: "#",
  },
  {
    title: "Inventario",
    icon: <HomeIcon className="h-4 w-auto pr-2 text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Leads",
    icon: <UsersIcon className="h-4 w-auto pr-2  text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Suscripción",
    icon: <CreditCard className="h-4 w-auto pr-2  text-red-digiliario" />,
    url: "#",
  },
  {
    title: "Configuraciones",
    icon: <CogIcon className="h-4 w-auto pr-2  text-red-digiliario " />,
    url: "#",
  },
  {
    title: "Cerrar sesión",
    item: "logout",
    icon: <Logout className="h-4 w-auto pr-2  text-red-digiliario" />,
    url: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderFiltros() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 shadow-md bg-white ">
      {({ open }) => (
        <>
          <div className="max-w-screen-3xl mx-auto px-4 ">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu bar */}
              <div className="absolute right-0 md:left-0 items-center md:hidden  ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-red-digiliario"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-red-digiliario hover:text-black-digiliario"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/*  End Mobile menu bar */}

              <div className="md:flex-1 flex items-center left-0 justify-center sm:items-stretch sm:justify-start ">
                <div className="md:flex flex-shrink-0 items-center cursor-pointer">
                  <Link href="/propiedades">
                    <img
                      className=" md:block h-10 w-auto pr-3"
                      src="/digiliario-logo.svg"
                      alt="digilirio"
                    />
                  </Link>
                </div>

                {/* <div className="md:hidden flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto pr-3"
                    src="/digiliario-logo-icon.svg"
                    alt="digilirio"
                  />
                </div> */}

                <div className="flex items-center ">
                  <div className="md:flex space-x-2 items-center hidden   ">
                    <div className="flex text-sm font-gilmerBold border-2 border-gray-300 rounded-lg ">
                      <input
                        placeholder="Búsqueda de inmueble por tipo, ciudad, colonia, código postal..."
                        className="outline-hidden outline-none placeholder:text-gray-500 px-3 py-2 bg-transparent md:min-w-[550px] lg:max-w-[350px]  "
                      ></input>
                    </div>
                  </div>
                  <div className="ml-2 hidden md:hidden lg:block ">
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

                  <div className="ml-2 hidden md:hidden lg:block">
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
              <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:flex ">
                <Menu as="div" className="relative">
                  <span className="sr-only">Open Menu</span>
                  <div className=" flex gap-2 items-center">
                    <UserCircleIcon className="w-7 text-red-digiliario " />

                    <Menu.Button className=" flex text-md rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white  focus:ring-white">
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-6 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black-digiliario ring-opacity-5 focus:outline-none">
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

          <Disclosure.Panel className="sm:hidden absolute w-full ">
            <div className="px-2 pt-4 pb-8 space-y-1 bg-black-digiliario ">
              <Disclosure.Button className="m-auto mt-4 mb-4 text-center content-center">
                <Link href="login">
                  <a
                    key="login"
                    className="bg-red-digiliario hover:bg-red-600 text-white font-gilmerMedium ml-3 px-3 py-2.5 rounded-md text-sm  "
                  >
                    Iniciar Sesión{" "}
                  </a>
                </Link>
              </Disclosure.Button>

              <a className="text-white bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-gilmerMedium pt-4">
                Bienvenido
                <div className="flex items-center pt-2 pb-6 ">
                  <div className="pr-4 flex items-center">
                    <label className="btn btn-ghost btn-circle avatar border-2 shadow-md rounded-full border-white">
                      <div className="w-20 rounded-full">
                        <UserCircleIcon className="w-7 text-red-digiliario " />
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col ">
                    <span className="font-gilmerBold text-lg">
                      Usuario invitado
                    </span>
                    <span className="text-sm"> demo@digiliario.com</span>
                  </div>
                </div>
              </a>
              <div className="pt-2"></div>
              {navigationMobile.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " bg-red-digiliario text-white"
                      : " text-white hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md  text-sm font-gilmerMedium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div className="flex items-center gap-2">
                    <HomeIcon className="w-6 text-white" />
                    {item.name}
                  </div>
                </Disclosure.Button>
              ))}
              <div className="pt-4"></div>
              <Disclosure.Button className="m-auto text-center content-center">
                <Link href="planes">
                  <a
                    key="planes"
                    className="bg-red-digiliario hover:bg-red-600 text-white font-gilmerMedium ml-3 px-3 py-2.5 rounded-md text-sm  "
                  >
                    Planes de Suscripción{" "}
                  </a>
                </Link>
              </Disclosure.Button>
              <div className="pt-4"></div>
              <Disclosure.Button className="m-auto text-center content-center">
                <Link href="planes">
                  <a
                    key="planes"
                    className="bg-red-digiliario hover:bg-red-600 text-white font-gilmerMedium ml-3 px-3 py-2.5 rounded-md text-sm  "
                  >
                    Publicar Inmueble{" "}
                  </a>
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
          {/* End Menu mobile */}
        </>
      )}
    </Disclosure>
  );
}

export default HeaderFiltros;
