"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Iconly } from "react-iconly";
import useLanguage from "@/src/store/language/useLanguage";
import { syncLanguageWithI18n } from "@/src/i18n/i18n";
import "./style.scss";

// Import icons
import ArrowIco from "@/src/assets/static/icon/ArrowIco.png";
import FosoIco from "@/public/assets/icon/logo.png";
import UkIco from "@/src/assets/static/icon/ukIco.png";
import VnIco from "@/src/assets/static/icon/vnIco.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    syncLanguageWithI18n();
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastScroll = 0;
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const currentScroll = window.pageYOffset;
        setIsScrollingUp(currentScroll < lastScroll || currentScroll === 0);
        lastScroll = currentScroll;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const languages = [
    { label: "VI", value: "VI", icon: VnIco },
    { label: "EN", value: "EN", icon: UkIco },
  ];

  const navLinks = [
    { label: t("about_us"), href: "/about" },
    { label: t("solution"), href: "/solution" },
    {
      label: t("resources"),
      dropdown: [{ label: "Blog", href: "/resources/news" }],
    },
    {
      label: t("contact"),
      dropdown: [{ label: "Option 1", href: "/contact" }],
    },
  ];

  const getLanguageIcon = (lang: string) =>
    languages.find((l) => l.value === lang)?.icon || UkIco;

  if (!mounted) return null;

  return (
    <header
      className={`sticky lg:top-6 w-full z-50 transition-transform duration-300 ${
        isScrollingUp
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto lg:w-7xl w-full bg-white px-4 lg:px-6 flex justify-center max-lg:justify-between gap-16 items-center lg:rounded-full custom_header_shadow py-3">
        {/* Logo */}
        <Image
          src={FosoIco}
          alt="Foso Icon"
          className="w-[52px] h-[22px] lg:w-[134px] lg:h-[55px]"
        />

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <Menu key={index} as="div" className="relative inline-block">
                <Menu.Button className="p-2 body-medium-medium font-raleway flex items-center gap-2 text-gray-700 hover:text-body-primary">
                  {link.label} <Iconly name="ChevronDown" />
                </Menu.Button>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 mt-2 w-max bg-white border rounded-md shadow-md">
                    {link.dropdown.map((item, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 text-body-primary ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={`p-2 body-medium-medium font-raleway ${
                  pathname.startsWith(link.href)
                    ? "text-body-primary font-bold"
                    : "text-gray-700 hover:text-body-primary "
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Language & CTA */}
        <nav className="hidden lg:flex items-center space-x-2">
          {/* Language Selector */}
          <Menu as="div" className="relative">
            <Menu.Button className="px-3 py-2 flex items-center gap-2 body-medium-medium rounded-full text-body-primary">
              <Image
                src={getLanguageIcon(language)}
                alt="Lang Icon"
                className="w-[24px] h-[24px]"
              />
              {language} <Iconly name="ChevronDown" />
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-24 bg-white border rounded-md shadow-md">
              {languages.map((lang) => (
                <Menu.Item key={lang.value}>
                  {({ active }) => (
                    <button
                      className={`w-full px-4 py-2 text-left text-body-primary ${
                        active ? "bg-gray-100" : ""
                      }`}
                      onClick={() => changeLanguage(lang.value)}
                    >
                      {lang.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

          {/* Become Customer Button */}
          <div className="py-[8.5px] px-3 custom_button rounded-full body-medium-bold text-body-primary flex items-center gap-3">
            {t("become_customer")}
            <div className="bg-black rounded-full p-2 inline-block">
              <Image
                src={ArrowIco}
                alt="Arrow Icon"
                className="w-[8px] h-[8px]"
              />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block lg:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          {navLinks.map((link, index) => {
            const isOpen = openDropdownIndex === index; // Kiểm tra dropdown nào đang mở

            return (
              <div key={index} className="border-b">
                {link.dropdown ? (
                  // Nếu có dropdown, dùng button thay vì Link
                  <button
                    onClick={() => setOpenDropdownIndex(isOpen ? null : index)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                  >
                    {link.label} <Iconly name="ChevronDown" />
                  </button>
                ) : (
                  // Nếu không có dropdown, dùng Link
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu (Chỉ hiển thị nếu dropdown đang mở) */}
                {isOpen && link.dropdown && (
                  <div className="bg-gray-50">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
