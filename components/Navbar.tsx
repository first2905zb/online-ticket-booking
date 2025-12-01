"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path: string, activeColor: string, hoverColor: string) =>
    `px-6 py-2 cursor-pointer border-b-2 transition-all duration-200
    ${
      pathname === path
        ? `${activeColor} font-bold`
        : `text-gray-800 ${hoverColor}`
    }`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center items-center">
      <Link href="/booking">
        <button
          className={linkClass(
            "/booking",
            "text-blue-600 border-blue-600",
            "hover:text-blue-600 hover:border-blue-400"
          )}
        >
          จองตั๋ว
        </button>
      </Link>

      <Link href="/cancel">
        <button
          className={linkClass(
            "/cancel",
            "text-red-600 border-red-600",
            "hover:text-red-600 hover:border-red-400"
          )}
        >
          ยกเลิกตั๋ว
        </button>
      </Link>

      <Link href="/admin">
        <button
          className={linkClass(
            "/admin",
            "text-green-600 border-green-600",
            "hover:text-green-600 hover:border-green-400"
          )}
        >
          ดูรายชื่อผู้จอง
        </button>
      </Link>

      <Link href="/map">
        <button
          className={linkClass(
            "/map",
            "text-yellow-600 border-yellow-600",
            "hover:text-yellow-600 hover:border-yellow-400"
          )}
        >
          ดูแผนที่ GIS
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
