"use client";

import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    // split path segments
    const segments = pathname?.split("/") || [];
    segments[1] = newLocale; // replace locale
    const newPath = segments.join("/");

    router.push(newPath); // navigate to new locale path
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="border rounded px-2 py-1"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
};

export default LanguageSwitcher;
