interface PostProps {
    slug: string;
    title: string;
    description: string;
    published: Date;
    author: string;
    id: number;
}


const posts: PostProps[] = [
    {
    id: 1,
    slug: "first-blog",
    title: "First blog",
    published: new Date("24-09-2025"),
    description: "First blog desc",
    author: "pank"        
},
{
    id: 2,
    slug: "second-blog",
    title: "Second blog",
    published: new Date("22-09-2025"),
    description: "Second blog desc",
    author: "pank"        
}
]


export const getPost = async (slug: string) =>{
    const post = posts.find((p)=> p.slug === slug)
    return post;
}