import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./ui/LanguageSwitcher";

type DictType = {
  about?: string;
  welcome?: string;
};

type Props = {
  dict?: DictType;
  locale: string;
};

const Header = ({ dict, locale }: Props) => {
   // console.log("Locale in Header:", locale);
  return (
    <header className="w-full p-4 border-b border-b-gray-300 flex justify-between items-center h-[120px]">
      <div className="text-2xl font-bold">Vehicle</div>
      <LanguageSwitcher locale={locale} />
      <nav>
        <ul className="flex gap-4">
          <li className="hover:underline cursor-pointer">
            <Link href={`/${locale}/about`}>{dict?.about}</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={`/${locale}`}>{dict?.welcome}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
