import { getDictionary } from "@/lib/getDictionary";
import Header from "@/components/Header";

// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params; // 
//   return {
//     title: "Truck Junction",
//     lang: locale,
//   };
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // You can now use params.locale directly
  const {locale} = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>{children}</main>
    </>
  );
}
