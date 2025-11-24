import React from 'react'
import {getPost} from '@/lib/data'

type Props = {
  params: {slug: string}
}

export async function generateMetadata({params}: Props){
    const {slug} = await params;
    const post = await getPost(slug);
    return {
        title: post?.title,
        description: post?.description
     }
}


const page = ({}: Props) => {
  return (
    <div>page</div>
  )
}

export default page