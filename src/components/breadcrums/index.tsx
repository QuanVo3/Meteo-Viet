/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Breadcrumbs = ({ className }: { className: any }) => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment)
    .map((segment) => decodeURIComponent(segment)); // Giải mã URL tránh lỗi encode

  return (
    <nav className={`w-full overflow-x-auto whitespace-nowrap ${className}`}>
      <ul className="flex items-center text-sm md:text-base text-body-primary body-medium-regular">
        {/* Home link */}
        <li>
          <Link href="/" className="hover:underline">
            {t("home")}
          </Link>
        </li>

        {/* Breadcrumb segments */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isActive = pathname === path;

          return (
            <div className="flex items-center" key={index}>
              <span className="mx-2 text-gray-400">›</span>
              <li className="max-w-[120px] md:max-w-none truncate">
                <Link
                  href={path}
                  className={`${
                    isActive ? "font-semibold text-primary" : "hover:underline"
                  } block truncate`}
                >
                  {t(segment.replace(/-/g, " "))}{" "}
                  {/* Hiển thị tên thư mục thay vì slug */}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
