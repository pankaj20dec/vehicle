import { getDictionary } from "@/lib/getDictionary";

 export default async function page ({params}: {params: Promise<{ locale: string }>}){
    const {locale} = await params;
    const dict = await getDictionary(locale);
    
  return (
    <div>{dict.welcome}</div>
  )
}
