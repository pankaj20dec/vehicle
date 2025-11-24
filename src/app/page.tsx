import Header from "@/components/Header";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home() {
  const dict = await getDictionary("en");
  return (
    <>
    <Header dict={dict} locale="en"/>
    <div className="font-sans gap-16 sm:p-20">
      <h1 className="text-4xl font-bold mb-8">{dict.welcome}</h1>
      <h2>{dict.about}</h2>
    </div>
    </>
  );
}
