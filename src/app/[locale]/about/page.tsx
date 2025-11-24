import Heading from "@/components/ui/Heading";
import { getDictionary } from "@/lib/getDictionary";
import Head from "next/head";

 export default async function page ({params}: {params: Promise<{ locale: string }>}){
    const {locale} = await params;
    const dict = await getDictionary(locale);
    
  return (
    <div>{dict.about}
        <Heading text={dict.about}/>
    </div>
    
  )
}
